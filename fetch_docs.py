#!/usr/bin/env python3
"""
Fetch Unity UIToolkit documentation from multiple sources:
1. Manual documentation from Unity's HTML docs (converted to Markdown)
2. Script API from Unity's GitHub C# reference repository

This script is used by the GitHub Actions workflow and can be run manually.
"""
import sys
import os
import subprocess
import shutil
from pathlib import Path
import re
import requests
from tempfile import NamedTemporaryFile

try:
    from markitdown import MarkItDown
except ImportError:
    print("ERROR: markitdown not installed. Run: pip install markitdown")
    sys.exit(1)

# Unity documentation base URL
UNITY_DOCS_BASE = "https://docs.unity3d.com/Manual"

# Unity C# Reference Repository
UNITY_CS_REFERENCE_REPO = "https://github.com/Unity-Technologies/UnityCsReference.git"

# UIToolkit-related documentation pages (Manual)
UITOOLKIT_PAGES = {
    "UIElements": "UIElements.html",
    "UXML": "UIE-UXML.html",
    "USS": "UIE-USS.html",
    "USS-Selectors": "UIE-USS-Selectors.html",
    "USS-Properties": "UIE-USS-SupportedProperties.html",
    "Binding": "UIE-Binding.html",
    "ListView": "UIE-uxml-element-ListView.html",
    "TreeView": "UIE-uxml-element-TreeView.html",
    "ScrollView": "UIE-uxml-element-ScrollView.html",
    "Custom-Controls": "UIE-custom-controls.html",
    "Events": "UIE-Events.html",
    "Editor-UI": "UIE-uxml-element-VisualElement.html",
}

# UIToolkit-related paths in the Unity repository
UITOOLKIT_PATHS = [
    "Modules/UIElements",
    "Modules/UIElementsEditor",
    "Modules/UIElementsSamplesEditor",
    "Editor/Mono/UIElements",
]

def fetch_and_convert(url, output_path, title):
    """Fetch HTML from URL and convert to Markdown"""
    try:
        print(f"Fetching {title}...")
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        
        # Save HTML to temporary file
        with NamedTemporaryFile(mode='w', suffix='.html', delete=False, encoding='utf-8') as temp_html:
            temp_html.write(response.text)
            temp_path = temp_html.name
        
        try:
            # Convert to Markdown using markitdown
            md = MarkItDown()
            result = md.convert(temp_path)
            
            # Clean up the markdown
            markdown_content = result.text_content
            
            # Add metadata header
            header = f"""# {title}

**Source:** {url}  
**Last Updated:** {response.headers.get('last-modified', 'Unknown')}

---

"""
            markdown_content = header + markdown_content
            
            # Write to output
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_text(markdown_content, encoding='utf-8')
            
            print(f"✓ Converted {title} to {output_path}")
            return True
        finally:
            # Clean up temporary file
            Path(temp_path).unlink(missing_ok=True)
        
    except Exception as e:
        print(f"✗ Error processing {title}: {e}", file=sys.stderr)
        return False

def clone_unity_repo(target_dir):
    """Clone Unity C# reference repository"""
    try:
        print(f"Cloning Unity C# Reference repository...")
        if target_dir.exists():
            print(f"Repository already exists at {target_dir}, cleaning up...")
            shutil.rmtree(target_dir)
        
        # Clone with depth 1 to save space and time
        subprocess.run(
            ["git", "clone", "--depth", "1", UNITY_CS_REFERENCE_REPO, str(target_dir)],
            check=True,
            capture_output=True,
            text=True
        )
        print(f"✓ Successfully cloned repository")
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ Error cloning repository: {e.stderr}", file=sys.stderr)
        return False
    except Exception as e:
        print(f"✗ Error: {e}", file=sys.stderr)
        return False

def extract_class_info(file_path):
    """Extract class documentation from C# source file"""
    try:
        content = file_path.read_text(encoding='utf-8')
        
        # Extract class name
        class_match = re.search(r'public\s+(?:partial\s+)?(?:class|struct|interface)\s+(\w+)', content)
        if not class_match:
            return None
        
        class_name = class_match.group(1)
        
        # Extract XML documentation comments
        doc_pattern = r'///\s*(.*?)(?:\n\s*///|\n\s*(?:public|internal|private|protected))'
        doc_matches = re.findall(doc_pattern, content, re.DOTALL)
        
        # Extract namespace
        namespace_match = re.search(r'namespace\s+([\w\.]+)', content)
        namespace = namespace_match.group(1) if namespace_match else "UnityEngine.UIElements"
        
        return {
            'name': class_name,
            'namespace': namespace,
            'file_path': file_path,
            'content': content,
            'documentation': doc_matches
        }
    except Exception as e:
        print(f"  Warning: Could not parse {file_path}: {e}")
        return None

def generate_class_markdown(class_info, repo_path):
    """Generate markdown documentation for a C# class"""
    relative_path = class_info['file_path'].relative_to(repo_path)
    github_url = f"https://github.com/Unity-Technologies/UnityCsReference/blob/master/{relative_path}"
    
    # Start with header
    markdown = f"# {class_info['name']}\n\n"
    markdown += f"**Namespace:** `{class_info['namespace']}`\n\n"
    markdown += f"**Source:** [{relative_path}]({github_url})\n\n"
    markdown += "---\n\n"
    
    # Add XML documentation if available
    if class_info['documentation']:
        markdown += "## Documentation\n\n"
        for doc in class_info['documentation']:
            # Clean up XML doc comments
            cleaned = doc.strip()
            cleaned = re.sub(r'<summary>\s*', '', cleaned)
            cleaned = re.sub(r'\s*</summary>', '', cleaned)
            cleaned = re.sub(r'<remarks>\s*', '\n**Remarks:**\n', cleaned)
            cleaned = re.sub(r'\s*</remarks>', '', cleaned)
            cleaned = re.sub(r'<see cref="([^"]+)"/>', r'`\1`', cleaned)
            cleaned = re.sub(r'<c>([^<]+)</c>', r'`\1`', cleaned)
            cleaned = re.sub(r'\[\[([^\]]+)\]\]', r'[\1]', cleaned)
            if cleaned:
                markdown += f"{cleaned}\n\n"
    
    # Extract public members from source
    markdown += "## Source Code Reference\n\n"
    markdown += f"For complete source code, see: [{class_info['name']}.cs]({github_url})\n\n"
    
    # Extract public properties and methods
    content = class_info['content']
    
    # Find public properties
    prop_pattern = r'public\s+(?:virtual\s+|override\s+|static\s+)?(\w+(?:<[^>]+>)?)\s+(\w+)\s*\{'
    properties = re.findall(prop_pattern, content)
    if properties:
        markdown += "### Public Properties\n\n"
        for prop_type, prop_name in properties[:20]:  # Limit to first 20
            markdown += f"- **{prop_name}**: `{prop_type}`\n"
        markdown += "\n"
    
    # Find public methods
    method_pattern = r'public\s+(?:virtual\s+|override\s+|static\s+)?(\w+(?:<[^>]+>)?)\s+(\w+)\s*\('
    methods = re.findall(method_pattern, content)
    if methods:
        markdown += "### Public Methods\n\n"
        seen_methods = set()
        for method_type, method_name in methods:
            if method_name not in seen_methods and method_name != class_info['name']:
                markdown += f"- **{method_name}()**: Returns `{method_type}`\n"
                seen_methods.add(method_name)
                if len(seen_methods) >= 20:  # Limit to first 20
                    break
        markdown += "\n"
    
    return markdown

def process_uitoolkit_files(repo_path, output_dir):
    """Process UIToolkit source files and generate documentation"""
    repo_path = Path(repo_path)
    output_dir = Path(output_dir)
    
    classes_dir = output_dir / "script-api"
    classes_dir.mkdir(parents=True, exist_ok=True)
    
    success_count = 0
    total_count = 0
    processed_classes = []
    
    print("\n=== Processing UIToolkit Source Files from GitHub ===")
    
    # Process each UIToolkit path
    for toolkit_path in UITOOLKIT_PATHS:
        full_path = repo_path / toolkit_path
        if not full_path.exists():
            print(f"  Skipping {toolkit_path} (not found)")
            continue
        
        print(f"\nProcessing {toolkit_path}...")
        
        # Find all C# files
        cs_files = list(full_path.rglob("*.cs"))
        print(f"  Found {len(cs_files)} C# files")
        
        for cs_file in cs_files:
            total_count += 1
            
            # Skip test files, editor-only utilities, and internal files
            file_name = cs_file.name
            if any(skip in str(cs_file) for skip in ['Test', 'Tests', '.Deprecated', 'Internal']):
                continue
            
            # Extract class information
            class_info = extract_class_info(cs_file)
            if not class_info:
                continue
            
            # Generate markdown
            try:
                markdown = generate_class_markdown(class_info, repo_path)
                
                # Save to file
                output_file = classes_dir / f"{class_info['name']}.md"
                
                # Handle duplicate class names by adding namespace prefix
                if output_file.exists():
                    safe_name = class_info['namespace'].replace('.', '_') + '_' + class_info['name']
                    output_file = classes_dir / f"{safe_name}.md"
                
                output_file.write_text(markdown, encoding='utf-8')
                
                processed_classes.append({
                    'name': class_info['name'],
                    'namespace': class_info['namespace'],
                    'file': output_file.name
                })
                success_count += 1
                
            except Exception as e:
                print(f"  ✗ Error generating docs for {cs_file.name}: {e}")
    
    print(f"\n✓ Successfully processed: {success_count} classes from GitHub")
    return processed_classes, success_count > 0

def main():
    """Main function to fetch and process Unity UIToolkit documentation"""
    
    docs_dir = Path("docs")
    docs_dir.mkdir(exist_ok=True)
    
    manual_dir = docs_dir / "manual"
    
    success_count = 0
    total_count = 0
    
    # Fetch Manual pages from HTML documentation
    print("\n=== Fetching Unity Manual Pages (HTML) ===")
    for name, page in UITOOLKIT_PAGES.items():
        total_count += 1
        url = f"{UNITY_DOCS_BASE}/{page}"
        output_path = manual_dir / f"{name}.md"
        if fetch_and_convert(url, output_path, name):
            success_count += 1
    
    # Clone Unity repository for script API
    temp_dir = Path("/tmp/UnityCsReference")
    if not clone_unity_repo(temp_dir):
        print("Error: Failed to clone Unity repository", file=sys.stderr)
        sys.exit(1)
    
    # Process UIToolkit files from GitHub
    processed_classes, github_success = process_uitoolkit_files(temp_dir, docs_dir)
    
    if github_success:
        success_count += len(processed_classes)
    
    # Create index file
    print("\n=== Creating Index ===")
    index_content = f"""# Unity UIToolkit Documentation

This directory contains documentation for Unity UIToolkit from multiple sources.

## Manual Pages

Documentation converted from Unity's HTML manual:

"""
    for name in sorted(UITOOLKIT_PAGES.keys()):
        index_content += f"- [{name}](manual/{name}.md)\n"
    
    index_content += "\n## Script API (from C# Source)\n\n"
    index_content += f"Documentation generated from Unity's C# reference source code on GitHub.\n"
    index_content += f"**Source:** [Unity-Technologies/UnityCsReference](https://github.com/Unity-Technologies/UnityCsReference)\n\n"
    
    # Group classes by namespace
    processed_classes.sort(key=lambda x: (x['namespace'], x['name']))
    current_namespace = None
    for cls in processed_classes:
        if cls['namespace'] != current_namespace:
            current_namespace = cls['namespace']
            index_content += f"\n### {current_namespace}\n\n"
        index_content += f"- [{cls['name']}](script-api/{cls['file']})\n"
    
    (docs_dir / "README.md").write_text(index_content, encoding='utf-8')
    
    # Clean up temporary repository
    try:
        print("\n=== Cleaning up ===")
        shutil.rmtree(temp_dir)
        print("✓ Removed temporary repository")
    except Exception as e:
        print(f"Warning: Could not remove temporary directory: {e}")
    
    print(f"\n=== Summary ===")
    print(f"Manual pages: {len(UITOOLKIT_PAGES)} fetched")
    print(f"Script API classes: {len(processed_classes)} generated")
    print(f"Total: {success_count} documents created")
    
    if success_count == 0:
        print("Error: No documentation was generated successfully", file=sys.stderr)
        sys.exit(1)
    
    print("\n✓ Documentation generation complete!")

if __name__ == "__main__":
    main()
