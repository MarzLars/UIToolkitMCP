#!/usr/bin/env python3
"""
Fetch Unity UIToolkit documentation HTML pages and convert to Markdown
This script is used by the GitHub Actions workflow and can be run manually.
"""
import sys
import requests
from pathlib import Path
from tempfile import NamedTemporaryFile

try:
    from markitdown import MarkItDown
except ImportError:
    print("ERROR: markitdown not installed. Run: pip install markitdown")
    sys.exit(1)

# Unity documentation base URL
UNITY_DOCS_BASE = "https://docs.unity3d.com/Manual"
UNITY_SCRIPT_API_BASE = "https://docs.unity3d.com/ScriptReference"

# UIToolkit-related documentation pages
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

# UIToolkit Script API classes
SCRIPT_API_CLASSES = [
    "UIElements.VisualElement",
    "UIElements.Label",
    "UIElements.Button",
    "UIElements.TextField",
    "UIElements.Toggle",
    "UIElements.Slider",
    "UIElements.SliderInt",
    "UIElements.ProgressBar",
    "UIElements.DropdownField",
    "UIElements.EnumField",
    "UIElements.ListView",
    "UIElements.TreeView",
    "UIElements.ScrollView",
    "UIElements.Foldout",
    "UIElements.GroupBox",
    "UIElements.Box",
    "UIElements.RadioButton",
    "UIElements.RadioButtonGroup",
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

def main():
    docs_dir = Path("docs")
    docs_dir.mkdir(exist_ok=True)
    
    manual_dir = docs_dir / "manual"
    script_api_dir = docs_dir / "script-api"
    
    success_count = 0
    total_count = 0
    
    # Fetch Manual pages
    print("\n=== Fetching Unity Manual Pages ===")
    for name, page in UITOOLKIT_PAGES.items():
        total_count += 1
        url = f"{UNITY_DOCS_BASE}/{page}"
        output_path = manual_dir / f"{name}.md"
        if fetch_and_convert(url, output_path, name):
            success_count += 1
    
    # Fetch Script API pages
    print("\n=== Fetching Unity Script API Pages ===")
    for class_name in SCRIPT_API_CLASSES:
        total_count += 1
        url = f"{UNITY_SCRIPT_API_BASE}/{class_name}.html"
        safe_name = class_name.replace(".", "_")
        output_path = script_api_dir / f"{safe_name}.md"
        if fetch_and_convert(url, output_path, class_name):
            success_count += 1
    
    # Create index file
    print("\n=== Creating Index ===")
    index_content = f"""# Unity UIToolkit Documentation

This directory contains pre-rendered Markdown documentation for Unity UIToolkit.

## Manual Pages

"""
    for name in sorted(UITOOLKIT_PAGES.keys()):
        index_content += f"- [{name}](manual/{name}.md)\n"
    
    index_content += "\n## Script API\n\n"
    for class_name in sorted(SCRIPT_API_CLASSES):
        safe_name = class_name.replace(".", "_")
        index_content += f"- [{class_name}](script-api/{safe_name}.md)\n"
    
    (docs_dir / "README.md").write_text(index_content, encoding='utf-8')
    
    print(f"\n=== Summary ===")
    print(f"Successfully converted: {success_count}/{total_count}")
    
    if success_count < total_count:
        sys.exit(1)

if __name__ == "__main__":
    main()
