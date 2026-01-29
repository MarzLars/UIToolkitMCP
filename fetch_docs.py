#!/usr/bin/env python3
"""
Fetch Unity UIToolkit source code from GitHub and generate documentation
This script is used by the GitHub Actions workflow and can be run manually.
"""
import sys
import os
import subprocess
import shutil
from pathlib import Path
import re

# Unity C# Reference Repository
UNITY_CS_REFERENCE_REPO = "https://github.com/Unity-Technologies/UnityCsReference.git"

# UIToolkit-related paths in the Unity repository
UITOOLKIT_PATHS = [
    "Modules/UIElements",
    "Modules/UIElementsEditor",
    "Modules/UIElementsSamplesEditor",
    "Editor/Mono/UIElements",
]

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
    
    # Clean up existing docs
    if output_dir.exists():
        shutil.rmtree(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    classes_dir = output_dir / "classes"
    classes_dir.mkdir(exist_ok=True)
    
    success_count = 0
    total_count = 0
    processed_classes = []
    
    print("\n=== Processing UIToolkit Source Files ===")
    
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
                print(f"  ✓ {class_info['namespace']}.{class_info['name']}")
                
            except Exception as e:
                print(f"  ✗ Error generating docs for {cs_file.name}: {e}")
    
    # Create index file
    print("\n=== Creating Index ===")
    create_index(output_dir, processed_classes)
    
    print(f"\n=== Summary ===")
    print(f"Successfully processed: {success_count} classes")
    print(f"Total files scanned: {total_count}")
    
    return success_count > 0

def create_index(output_dir, processed_classes):
    """Create index file with all processed classes"""
    
    # Sort by namespace and name
    processed_classes.sort(key=lambda x: (x['namespace'], x['name']))
    
    index_content = """# Unity UIToolkit Source Code Documentation

This directory contains documentation generated from Unity's C# reference source code.

**Source Repository:** [Unity-Technologies/UnityCsReference](https://github.com/Unity-Technologies/UnityCsReference)

---

## About

This documentation is generated from the actual Unity UIToolkit source code on GitHub. It includes:
- Class definitions and structure
- Public properties and methods
- XML documentation comments
- Direct links to source code

## UIToolkit Classes

"""
    
    # Group by namespace
    current_namespace = None
    for cls in processed_classes:
        if cls['namespace'] != current_namespace:
            current_namespace = cls['namespace']
            index_content += f"\n### {current_namespace}\n\n"
        
        index_content += f"- [{cls['name']}](classes/{cls['file']})\n"
    
    # Write index
    (output_dir / "README.md").write_text(index_content, encoding='utf-8')
    print(f"✓ Created index with {len(processed_classes)} classes")

def main():
    """Main function to fetch and process Unity UIToolkit documentation"""
    
    # Use a temporary directory for cloning
    temp_dir = Path("/tmp/UnityCsReference")
    docs_dir = Path("docs")
    
    # Clone Unity repository
    if not clone_unity_repo(temp_dir):
        sys.exit(1)
    
    # Process UIToolkit files
    if not process_uitoolkit_files(temp_dir, docs_dir):
        print("Error: No UIToolkit classes were processed successfully", file=sys.stderr)
        sys.exit(1)
    
    # Clean up temporary repository
    try:
        print("\n=== Cleaning up ===")
        shutil.rmtree(temp_dir)
        print("✓ Removed temporary repository")
    except Exception as e:
        print(f"Warning: Could not remove temporary directory: {e}")
    
    print("\n✓ Documentation generation complete!")

if __name__ == "__main__":
    main()
