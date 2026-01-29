#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { readFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Get directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DOCS_DIR = join(__dirname, "..", "docs");

// Unity UIToolkit documentation base URLs
const UNITY_DOCS_BASE = "https://docs.unity3d.com/Manual";
const UNITY_SCRIPT_API_BASE = "https://docs.unity3d.com/ScriptReference";
const UNITY_UITK_EXAMPLES_REPO = "https://github.com/Unity-Technologies/ui-toolkit-manual-code-examples";
const UNITY_UITK_EXAMPLES_RAW = "https://raw.githubusercontent.com/Unity-Technologies/ui-toolkit-manual-code-examples/main";

// Define available tools
const TOOLS: Tool[] = [
  {
    name: "get_uitoolkit_documentation",
    description: "Provides Unity UIToolkit documentation reference with links and examples for specific topics like UXML, USS, UIElements, and other UIToolkit concepts.",
    inputSchema: {
      type: "object",
      properties: {
        topic: {
          type: "string",
          description: "The UIToolkit topic to search for (e.g., 'UIElements', 'UXML', 'USS', 'VisualElement', 'StyleSheet')",
        },
      },
      required: ["topic"],
    },
  },
  {
    name: "get_uitoolkit_code_example",
    description: "Provides common Unity UIToolkit code example patterns with links to Unity's official examples repository. Returns reference code samples demonstrating UIToolkit usage.",
    inputSchema: {
      type: "object",
      properties: {
        example_name: {
          type: "string",
          description: "Name or path of the example to retrieve (e.g., 'simple-list-view', 'custom-control', 'data-binding')",
        },
      },
      required: ["example_name"],
    },
  },
  {
    name: "get_unity_script_reference",
    description: "Retrieves Unity Script API reference documentation for UIToolkit classes and methods. Use this to get detailed API information.",
    inputSchema: {
      type: "object",
      properties: {
        class_name: {
          type: "string",
          description: "The Unity class name to look up (e.g., 'VisualElement', 'ListView', 'Button', 'Label')",
        },
      },
      required: ["class_name"],
    },
  },
  {
    name: "convert_html_to_uxml",
    description: "Provides guidance and examples for converting HTML markup to UXML format. Returns conversion patterns and best practices.",
    inputSchema: {
      type: "object",
      properties: {
        html_snippet: {
          type: "string",
          description: "HTML code snippet to convert to UXML",
        },
      },
      required: ["html_snippet"],
    },
  },
  {
    name: "convert_css_to_uss",
    description: "Provides guidance and examples for converting CSS styles to USS (Unity Style Sheets) format. Returns conversion patterns and best practices.",
    inputSchema: {
      type: "object",
      properties: {
        css_snippet: {
          type: "string",
          description: "CSS code snippet to convert to USS",
        },
      },
      required: ["css_snippet"],
    },
  },
  {
    name: "list_uitoolkit_components",
    description: "Lists available Unity UIToolkit components and controls with brief descriptions. Useful for discovering what UI elements are available.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter (e.g., 'containers', 'controls', 'data-bound')",
        },
      },
    },
  },
  {
    name: "read_prerendered_docs",
    description: "Reads pre-rendered Markdown documentation for Unity UIToolkit. Returns clean, LLM-friendly Markdown content that was converted from Unity's HTML documentation.",
    inputSchema: {
      type: "object",
      properties: {
        doc_type: {
          type: "string",
          description: "Type of documentation: 'manual' or 'script-api'",
          enum: ["manual", "script-api"],
        },
        doc_name: {
          type: "string",
          description: "Name of the documentation file (e.g., 'UXML', 'UIElements', 'UIElements_VisualElement')",
        },
      },
      required: ["doc_type", "doc_name"],
    },
  },
  {
    name: "list_prerendered_docs",
    description: "Lists all available pre-rendered documentation files organized by type (manual and script-api).",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
];

// HTML to UXML conversion reference
const HTML_TO_UXML_CONVERSIONS: Record<string, any> = {
  div: { element: "ui:VisualElement", note: "Generic container" },
  span: { element: "ui:VisualElement", note: "Inline element, use styling for display" },
  p: { element: "ui:Label", note: "Text paragraph" },
  h1: { element: "ui:Label", note: "Heading - style with USS" },
  h2: { element: "ui:Label", note: "Heading - style with USS" },
  h3: { element: "ui:Label", note: "Heading - style with USS" },
  button: { element: "ui:Button", note: "Interactive button" },
  input: { element: "ui:TextField", note: "Text input field" },
  textarea: { element: "ui:TextField", note: "Multi-line text with multiline='true'" },
  label: { element: "ui:Label", note: "Text label" },
  img: { element: "ui:VisualElement", note: "Use background-image in USS" },
  ul: { element: "ui:ListView", note: "List container" },
  ol: { element: "ui:ListView", note: "Ordered list" },
  li: { element: "ui:VisualElement", note: "List item within ListView" },
  select: { element: "ui:DropdownField", note: "Dropdown selection" },
  checkbox: { element: "ui:Toggle", note: "Checkbox/toggle" },
  slider: { element: "ui:Slider", note: "Slider control" },
  progress: { element: "ui:ProgressBar", note: "Progress indicator" },
};

// CSS to USS property mappings
const CSS_TO_USS_PROPERTIES: Record<string, any> = {
  "background-color": { property: "background-color", note: "Same property name" },
  "color": { property: "color", note: "Text color" },
  "width": { property: "width", note: "Can use px, %, auto" },
  "height": { property: "height", note: "Can use px, %, auto" },
  "margin": { property: "margin", note: "Use margin-top, margin-bottom, etc." },
  "padding": { property: "padding", note: "Use padding-top, padding-bottom, etc." },
  "border": { property: "border-width, border-color", note: "Separate properties" },
  "border-radius": { property: "border-radius", note: "Corner rounding" },
  "font-size": { property: "font-size", note: "Text size" },
  "font-family": { property: "-unity-font", note: "Unity-specific font property" },
  "font-weight": { property: "-unity-font-style", note: "Use bold, italic, bold-and-italic" },
  "text-align": { property: "-unity-text-align", note: "Unity-specific" },
  "display": { property: "display", note: "flex or none" },
  "flex-direction": { property: "flex-direction", note: "row or column" },
  "justify-content": { property: "justify-content", note: "Flexbox alignment" },
  "align-items": { property: "align-items", note: "Flexbox alignment" },
  "position": { property: "position", note: "relative or absolute" },
  "top": { property: "top", note: "Position offset" },
  "left": { property: "left", note: "Position offset" },
  "right": { property: "right", note: "Position offset" },
  "bottom": { property: "bottom", note: "Position offset" },
  "opacity": { property: "opacity", note: "Transparency (0-1)" },
  "visibility": { property: "visibility", note: "visible or hidden" },
};

// UIToolkit components reference
const UITOOLKIT_COMPONENTS = {
  containers: [
    { name: "VisualElement", description: "Basic container element, similar to HTML div" },
    { name: "ScrollView", description: "Scrollable container for content that exceeds viewport" },
    { name: "GroupBox", description: "Container with optional title/border" },
    { name: "Box", description: "Simple container with default styling" },
    { name: "Foldout", description: "Collapsible container section" },
  ],
  controls: [
    { name: "Label", description: "Display text, non-editable" },
    { name: "Button", description: "Clickable button control" },
    { name: "Toggle", description: "Checkbox or toggle switch" },
    { name: "TextField", description: "Single or multi-line text input" },
    { name: "Slider", description: "Numeric value slider" },
    { name: "SliderInt", description: "Integer value slider" },
    { name: "MinMaxSlider", description: "Range selection slider" },
    { name: "ProgressBar", description: "Progress indicator" },
    { name: "DropdownField", description: "Dropdown selection menu" },
    { name: "EnumField", description: "Enum value selector" },
    { name: "RadioButton", description: "Radio button for exclusive selection" },
    { name: "RadioButtonGroup", description: "Group of radio buttons" },
  ],
  "data-bound": [
    { name: "ListView", description: "Virtualized list for large datasets" },
    { name: "TreeView", description: "Hierarchical tree structure" },
    { name: "MultiColumnListView", description: "List with multiple columns" },
    { name: "MultiColumnTreeView", description: "Tree with multiple columns" },
  ],
  advanced: [
    { name: "IMGUIContainer", description: "Container for IMGUI content" },
    { name: "TemplateContainer", description: "Instance of a UXML template" },
    { name: "BindableElement", description: "Element that supports data binding" },
  ],
};

// Tool handlers
async function handleGetUIToolkitDocumentation(topic: string): Promise<string> {
  const topicMap: Record<string, string> = {
    uxml: "UIE-UXML.html",
    uss: "UIE-USS.html",
    visualelement: "UIElements-VisualElement.html",
    stylesheet: "UIE-USS-Selectors.html",
    uielements: "UIElements.html",
    "data-binding": "UIE-Binding.html",
    listview: "UIE-ListView.html",
    treeview: "UIE-TreeView.html",
    custom: "UIE-custom-controls.html",
  };

  const normalizedTopic = topic.toLowerCase().replace(/\s+/g, "-");
  const docFile = topicMap[normalizedTopic] || `UIE-${topic}.html`;
  
  return `# Unity UIToolkit Documentation: ${topic}

## Documentation Links

Main Documentation: ${UNITY_DOCS_BASE}/${docFile}
UIElements Manual: ${UNITY_DOCS_BASE}/UIElements.html

## Overview

${topic === "UXML" ? `
UXML (Unity XML) is Unity's markup language for defining user interfaces. It is similar to HTML but designed specifically for Unity's UIToolkit.

### Key Concepts:
- UXML files define the structure of UI elements
- Elements are defined using XML-style tags with the 'ui:' namespace
- Each element can have attributes for configuration
- Templates can be referenced and reused

### Basic Structure:
\`\`\`xml
<ui:UXML xmlns:ui="UnityEngine.UIElements">
    <ui:VisualElement name="container">
        <ui:Label text="Hello World" />
        <ui:Button text="Click Me" name="myButton" />
    </ui:VisualElement>
</ui:UXML>
\`\`\`

### Common Attributes:
- name: Identifier for querying elements in code
- class: USS class names for styling
- style: Inline styles
- picking-mode: Controls interaction (Position or Ignore)
` : ""}

${topic === "USS" ? `
USS (Unity Style Sheets) is Unity's styling language, similar to CSS but with Unity-specific properties.

### Key Concepts:
- USS files define the visual appearance of UI elements
- Supports selectors: element type, class, name, pseudo-classes
- Uses flexbox layout system
- Unity-specific properties prefixed with '-unity-'

### Basic Structure:
\`\`\`css
/* Element type selector */
Label {
    color: white;
    font-size: 14px;
}

/* Class selector */
.header {
    background-color: rgb(50, 50, 50);
    padding: 10px;
}

/* Name selector */
#myButton {
    border-radius: 5px;
    -unity-font-style: bold;
}
\`\`\`

### Common Properties:
- color: Text color
- background-color: Background color
- width/height: Size (px, %, auto)
- margin/padding: Spacing
- border-*: Border properties
- -unity-font: Font asset
- -unity-font-style: bold, italic, bold-and-italic
- -unity-text-align: Text alignment
` : ""}

${topic === "VisualElement" || topic === "UIElements" ? `
VisualElement is the base class for all UI elements in Unity's UIToolkit.

### Key Properties:
- name: Element identifier
- style: Inline style properties
- classList: CSS class names
- userData: Custom data storage

### Common Methods:
- Add(VisualElement child): Add child element
- Remove(VisualElement child): Remove child element
- Query<T>(): Query descendants by type
- Q(string name): Query by name
- Q(string name, string className): Query by name and class

### Example Usage:
\`\`\`csharp
var container = new VisualElement();
container.name = "myContainer";
container.AddToClassList("container-class");

var label = new Label("Hello");
container.Add(label);

// Query elements
var button = root.Q<Button>("myButton");
var elements = root.Query<Label>().ToList();
\`\`\`
` : ""}

For complete documentation, please visit: ${UNITY_DOCS_BASE}/${docFile}
`;
}

async function handleGetUIToolkitCodeExample(exampleName: string): Promise<string> {
  const examplePaths: Record<string, string> = {
    "simple-list-view": "ListView/SimpleListView",
    "dynamic-list-view": "ListView/DynamicListView",
    "custom-control": "CustomControls/Rating",
    "data-binding": "DataBinding/SimpleBinding",
    "style-sheets": "USS/StyleSheets",
    "layout": "Layout/FlexboxLayout",
  };

  const examplePath = examplePaths[exampleName.toLowerCase()] || exampleName;

  return `# Unity UIToolkit Code Example: ${exampleName}

## Repository
GitHub: ${UNITY_UITK_EXAMPLES_REPO}

## Example Location
Path: ${examplePath}
Raw Content: ${UNITY_UITK_EXAMPLES_RAW}/${examplePath}

## Common Examples

### Simple ListView Example
\`\`\`csharp
// C# Script for ListView
using UnityEngine;
using UnityEngine.UIElements;
using System.Collections.Generic;

public class SimpleListViewExample : MonoBehaviour
{
    private List<string> items = new List<string> { "Item 1", "Item 2", "Item 3" };

    void OnEnable()
    {
        var root = GetComponent<UIDocument>().rootVisualElement;
        var listView = root.Q<ListView>("myListView");

        listView.itemsSource = items;
        listView.makeItem = () => new Label();
        listView.bindItem = (element, index) => 
        {
            (element as Label).text = items[index];
        };
    }
}
\`\`\`

### Custom Control Example
\`\`\`csharp
// Creating a custom rating control
using UnityEngine.UIElements;

public class RatingControl : VisualElement
{
    public new class UxmlFactory : UxmlFactory<RatingControl, UxmlTraits> { }

    public new class UxmlTraits : VisualElement.UxmlTraits
    {
        UxmlIntAttributeDescription m_MaxRating = 
            new UxmlIntAttributeDescription { name = "max-rating", defaultValue = 5 };

        public override void Init(VisualElement ve, IUxmlAttributes bag, CreationContext cc)
        {
            base.Init(ve, bag, cc);
            var rating = ve as RatingControl;
            rating.maxRating = m_MaxRating.GetValueFromBag(bag, cc);
        }
    }

    private int m_MaxRating = 5;
    public int maxRating
    {
        get => m_MaxRating;
        set
        {
            m_MaxRating = value;
            CreateStars();
        }
    }

    public RatingControl()
    {
        CreateStars();
    }

    private void CreateStars()
    {
        Clear();
        for (int i = 0; i < m_MaxRating; i++)
        {
            var star = new Label("★");
            star.AddToClassList("star");
            Add(star);
        }
    }
}
\`\`\`

### Data Binding Example
\`\`\`csharp
// Simple data binding
using UnityEngine;
using UnityEngine.UIElements;

[UxmlElement]
public partial class DataBindingExample : VisualElement
{
    [UxmlAttribute]
    public string playerName { get; set; }

    [UxmlAttribute]
    public int playerScore { get; set; }

    public DataBindingExample()
    {
        var nameLabel = new Label();
        nameLabel.dataSourcePath = new PropertyPath(nameof(playerName));
        Add(nameLabel);

        var scoreLabel = new Label();
        scoreLabel.dataSourcePath = new PropertyPath(nameof(playerScore));
        Add(scoreLabel);
    }
}
\`\`\`

For more examples, visit: ${UNITY_UITK_EXAMPLES_REPO}
`;
}

async function handleGetUnityScriptReference(className: string): Promise<string> {
  const scriptUrl = `${UNITY_SCRIPT_API_BASE}/UIElements.${className}.html`;

  const commonClasses: Record<string, string> = {
    VisualElement: `
## VisualElement
Base class for all UI Toolkit visual elements.

### Key Properties:
- **style**: IStyle - Inline style properties
- **name**: string - Element identifier
- **classList**: IEnumerable<string> - CSS classes
- **parent**: VisualElement - Parent element
- **children**: IEnumerable<VisualElement> - Child elements

### Key Methods:
- **Add(VisualElement child)**: Add a child element
- **Remove(VisualElement child)**: Remove a child element
- **RemoveFromHierarchy()**: Remove from parent
- **Q<T>(string name = null, string className = null)**: Query single element
- **Query<T>(string name = null, string className = null)**: Query multiple elements
- **AddToClassList(string className)**: Add CSS class
- **RemoveFromClassList(string className)**: Remove CSS class
- **ToggleInClassList(string className)**: Toggle CSS class

### Events:
- **RegisterCallback<TEventType>(EventCallback<TEventType> callback)**: Register event handler
- **UnregisterCallback<TEventType>(EventCallback<TEventType> callback)**: Unregister event handler
`,
    Button: `
## Button
Clickable button control.

### Properties:
- **text**: string - Button label text
- **clicked**: Action - Click event

### Example:
\`\`\`csharp
var button = new Button(() => Debug.Log("Clicked!"));
button.text = "Click Me";

// Or with event
var button2 = new Button();
button2.clicked += () => Debug.Log("Clicked!");
\`\`\`
`,
    Label: `
## Label
Non-editable text display.

### Properties:
- **text**: string - Display text

### Example:
\`\`\`csharp
var label = new Label("Hello World");
label.style.color = Color.white;
\`\`\`
`,
    TextField: `
## TextField
Text input field.

### Properties:
- **value**: string - Current text value
- **isReadOnly**: bool - Whether text is editable
- **maxLength**: int - Maximum character count
- **multiline**: bool - Allow multiple lines
- **isPasswordField**: bool - Mask input characters

### Events:
- **RegisterValueChangedCallback**: Called when value changes

### Example:
\`\`\`csharp
var textField = new TextField("Label:");
textField.value = "Initial text";
textField.RegisterValueChangedCallback(evt => 
{
    Debug.Log($"New value: {evt.newValue}");
});
\`\`\`
`,
    ListView: `
## ListView
Virtualized list view for displaying collections.

### Properties:
- **itemsSource**: IList - Data source
- **makeItem**: Func<VisualElement> - Create item visual
- **bindItem**: Action<VisualElement, int> - Bind data to item
- **unbindItem**: Action<VisualElement, int> - Unbind data
- **itemHeight**: float - Fixed item height
- **selectedIndex**: int - Currently selected index
- **selectionType**: SelectionType - Selection behavior

### Events:
- **onSelectionChange**: Action<IEnumerable<object>> - Selection changed
- **onItemsChosen**: Action<IEnumerable<object>> - Item activated

### Example:
\`\`\`csharp
var listView = new ListView();
listView.itemsSource = myDataList;
listView.makeItem = () => new Label();
listView.bindItem = (element, index) =>
{
    (element as Label).text = myDataList[index].ToString();
};
listView.onSelectionChange += (items) => 
{
    Debug.Log($"Selected: {items.First()}");
};
\`\`\`
`,
  };

  const classInfo = commonClasses[className] || `
## ${className}
Unity UIToolkit class.

For detailed documentation, visit: ${scriptUrl}
`;

  return `# Unity Script Reference: ${className}

## API Documentation
${UNITY_SCRIPT_API_BASE}/UIElements.${className}.html

${classInfo}

## Namespace
UnityEngine.UIElements

For complete API reference, please visit the Unity documentation.
`;
}

function handleConvertHtmlToUxml(htmlSnippet: string): string {
  let conversions: string[] = [];

  // Convert common HTML tags to UXML equivalents with more precise matching
  Object.entries(HTML_TO_UXML_CONVERSIONS).forEach(([htmlTag, uxmlInfo]) => {
    // Use a simple regex without global flag to check for tag presence
    const regex = new RegExp(`<${htmlTag}(?:\\s|>|/)`, "i");
    if (regex.test(htmlSnippet)) {
      conversions.push(`  ${htmlTag} → ${uxmlInfo.element} (${uxmlInfo.note})`);
    }
  });

  return `# HTML to UXML Conversion

## Original HTML:
\`\`\`html
${htmlSnippet}
\`\`\`

## Conversions Applied:
${conversions.join("\n") || "No direct conversions found"}

## General Conversion Guidelines:

### 1. Root Element
HTML documents need a UXML root:
\`\`\`xml
<ui:UXML xmlns:ui="UnityEngine.UIElements" xmlns:uie="UnityEditor.UIElements">
    <!-- Your UI elements here -->
</ui:UXML>
\`\`\`

### 2. Common Element Conversions:
${Object.entries(HTML_TO_UXML_CONVERSIONS).map(([html, uxml]) => 
  `- \`<${html}>\` → \`<${uxml.element}>\` (${uxml.note})`
).join("\n")}

### 3. Attribute Conversions:
- \`id="myId"\` → \`name="myId"\`
- \`class="myClass"\` → \`class="myClass"\` (same)
- \`style="..."\` → \`style="..."\` (USS syntax)

### 4. Example Conversion:
\`\`\`html
<!-- HTML -->
<div class="container">
    <h1>Title</h1>
    <button id="myButton">Click Me</button>
    <input type="text" placeholder="Enter text" />
</div>
\`\`\`

\`\`\`xml
<!-- UXML -->
<ui:UXML xmlns:ui="UnityEngine.UIElements">
    <ui:VisualElement class="container">
        <ui:Label text="Title" class="title" />
        <ui:Button text="Click Me" name="myButton" />
        <ui:TextField label="Enter text" />
    </ui:VisualElement>
</ui:UXML>
\`\`\`

### 5. Key Differences:
- UXML uses self-closing tags or explicit closing tags
- Text content is typically an attribute (e.g., \`text="..."\`)
- No direct equivalent for semantic HTML tags (use styling)
- Event handlers are bound in C# code, not in UXML
`;
}

function handleConvertCssToUss(cssSnippet: string): string {
  let conversions: string[] = [];

  // Check for common CSS properties with more precise matching
  Object.entries(CSS_TO_USS_PROPERTIES).forEach(([cssProperty, ussInfo]) => {
    // Match property name followed by colon or at word boundaries
    const regex = new RegExp(`\\b${cssProperty.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:`, "i");
    if (regex.test(cssSnippet)) {
      conversions.push(`  ${cssProperty} → ${ussInfo.property} (${ussInfo.note})`);
    }
  });

  return `# CSS to USS Conversion

## Original CSS:
\`\`\`css
${cssSnippet}
\`\`\`

## Properties Detected:
${conversions.join("\n") || "No common properties detected"}

## General Conversion Guidelines:

### 1. Property Conversions:
${Object.entries(CSS_TO_USS_PROPERTIES).map(([css, uss]) => 
  `- \`${css}\` → \`${uss.property}\` (${uss.note})`
).join("\n")}

### 2. Selectors (Mostly Compatible):
\`\`\`css
/* Type selector - same */
Label { color: white; }

/* Class selector - same */
.my-class { background-color: blue; }

/* ID selector - use name */
#myElement { width: 100px; }

/* Pseudo-classes */
Button:hover { background-color: gray; }
:checked { background-color: green; }
\`\`\`

### 3. Color Values:
\`\`\`css
/* CSS */
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);

/* USS - same formats */
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
\`\`\`

### 4. Example Conversion:
\`\`\`css
/* CSS */
.button {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    border-radius: 4px;
    font-family: Arial, sans-serif;
}

.button:hover {
    background-color: #45a049;
}
\`\`\`

\`\`\`css
/* USS */
.button {
    background-color: rgb(76, 175, 80);
    color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 16px;
    border-radius: 4px;
    -unity-font: url('project://database/Assets/Fonts/Arial.ttf');
}

.button:hover {
    background-color: rgb(69, 160, 73);
}
\`\`\`

### 5. Key Differences:
- USS uses Unity-specific properties with \`-unity-\` prefix
- Fonts are referenced via Unity asset paths
- Some CSS3 features are not supported
- Flexbox is the primary layout system
- No \`float\` property - use flexbox instead
- No \`z-index\` - use element ordering instead

### 6. Unsupported CSS Features:
- Animations and transitions (use C# instead)
- Complex selectors (descendant combinator limited)
- Media queries
- CSS Grid
- Transform property (limited support)

For complete USS documentation, visit: ${UNITY_DOCS_BASE}/UIE-USS.html
`;
}

function handleListUIToolkitComponents(category?: string): string {
  const categories = category 
    ? { [category]: (UITOOLKIT_COMPONENTS as any)[category] }
    : UITOOLKIT_COMPONENTS;

  // Validate category if specified
  if (category && !(UITOOLKIT_COMPONENTS as any)[category]) {
    const validCategories = Object.keys(UITOOLKIT_COMPONENTS).join(", ");
    return `# Unity UIToolkit Components

## Error: Invalid Category

The category "${category}" does not exist.

Valid categories are: ${validCategories}

To see all components, call this tool without specifying a category.
`;
  }

  let result = "# Unity UIToolkit Components\n\n";

  for (const [catName, components] of Object.entries(categories)) {
    if (!components) continue;
    
    result += `## ${catName.charAt(0).toUpperCase() + catName.slice(1)}\n\n`;
    
    components.forEach((component: any) => {
      result += `### ${component.name}\n`;
      result += `${component.description}\n\n`;
      result += `**UXML:** \`<ui:${component.name} />\`\n`;
      result += `**C#:** \`new ${component.name}()\`\n\n`;
    });
  }

  result += `\n## Additional Resources\n`;
  result += `- Documentation: ${UNITY_DOCS_BASE}/UIElements.html\n`;
  result += `- Script Reference: ${UNITY_SCRIPT_API_BASE}/UnityEngine.UIElements.html\n`;
  result += `- Examples: ${UNITY_UITK_EXAMPLES_REPO}\n`;

  return result;
}

// Handler for reading pre-rendered documentation
function handleReadPrerenderedDocs(docType: string, docName: string): string {
  try {
    // Validate docType
    if (docType !== "manual" && docType !== "script-api") {
      return `# Invalid Documentation Type

The doc_type must be either "manual" or "script-api".

You provided: "${docType}"
`;
    }
    
    // Validate docName to prevent path traversal
    if (docName.includes("..") || docName.includes("/") || docName.includes("\\")) {
      return `# Invalid Documentation Name

The doc_name cannot contain path separators or directory traversal sequences.

You provided: "${docName}"

Use the \`list_prerendered_docs\` tool to see valid documentation names.
`;
    }
    
    // Construct the file path
    const subDir = docType === "manual" ? "manual" : "script-api";
    const filePath = join(DOCS_DIR, subDir, `${docName}.md`);
    
    // Verify the resolved path is still within DOCS_DIR (additional safety check)
    const resolvedPath = require('fs').realpathSync(filePath).replace(/\\/g, '/');
    const docsPath = require('fs').realpathSync(DOCS_DIR).replace(/\\/g, '/');
    if (!resolvedPath.startsWith(docsPath)) {
      return `# Security Error

Invalid file path detected.
`;
    }
    
    // Check if file exists
    if (!existsSync(filePath)) {
      return `# Documentation Not Found

The requested documentation file does not exist: ${docType}/${docName}.md

Use the \`list_prerendered_docs\` tool to see available documentation files.

**Note:** If the documentation hasn't been generated yet, you can:
1. Trigger the GitHub Actions workflow to fetch and convert documentation
2. Or use the legacy tools (get_uitoolkit_documentation, get_unity_script_reference) for reference information
`;
    }
    
    // Read and return the markdown content
    const content = readFileSync(filePath, 'utf-8');
    return content;
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return `# Error Reading Documentation

Failed to read documentation file: ${errorMessage}

Please ensure the documentation has been generated via the GitHub Actions workflow.
`;
  }
}

// Handler for listing pre-rendered documentation
function handleListPrerenderedDocs(): string {
  try {
    let result = "# Available Pre-rendered Unity UIToolkit Documentation\n\n";
    
    const manualDir = join(DOCS_DIR, "manual");
    const scriptApiDir = join(DOCS_DIR, "script-api");
    
    // Check if docs directory exists
    if (!existsSync(DOCS_DIR)) {
      return `# Documentation Not Available

Pre-rendered documentation has not been generated yet.

The documentation is automatically fetched and converted via GitHub Actions. To generate it:
1. Wait for the scheduled weekly run, or
2. Manually trigger the "Update Unity UIToolkit Documentation" workflow in GitHub Actions

In the meantime, you can use these tools:
- \`get_uitoolkit_documentation\` - For reference information with links
- \`get_unity_script_reference\` - For Script API references
- \`get_uitoolkit_code_example\` - For code examples
`;
    }
    
    // List manual pages
    result += "## Manual Documentation\n\n";
    if (existsSync(manualDir)) {
      const manualFiles = readdirSync(manualDir).filter(f => f.endsWith('.md'));
      if (manualFiles.length > 0) {
        manualFiles.sort();
        manualFiles.forEach(file => {
          const name = file.replace('.md', '');
          result += `- **${name}** - Use \`read_prerendered_docs\` with doc_type="manual" and doc_name="${name}"\n`;
        });
      } else {
        result += "*No manual documentation available yet*\n";
      }
    } else {
      result += "*Manual documentation directory not found*\n";
    }
    
    result += "\n## Script API Documentation\n\n";
    if (existsSync(scriptApiDir)) {
      const scriptApiFiles = readdirSync(scriptApiDir).filter(f => f.endsWith('.md'));
      if (scriptApiFiles.length > 0) {
        scriptApiFiles.sort();
        scriptApiFiles.forEach(file => {
          const name = file.replace('.md', '');
          const displayName = name.replace(/_/g, '.');
          result += `- **${displayName}** - Use \`read_prerendered_docs\` with doc_type="script-api" and doc_name="${name}"\n`;
        });
      } else {
        result += "*No script API documentation available yet*\n";
      }
    } else {
      result += "*Script API documentation directory not found*\n";
    }
    
    result += "\n## How to Use\n\n";
    result += "To read a specific documentation file, use the `read_prerendered_docs` tool with:\n";
    result += "- `doc_type`: Either \"manual\" or \"script-api\"\n";
    result += "- `doc_name`: The name shown above (e.g., \"UXML\" or \"UIElements_VisualElement\")\n";
    
    return result;
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return `# Error Listing Documentation

Failed to list documentation files: ${errorMessage}
`;
  }
}

// Create and run the server
const server = new Server(
  {
    name: "uitoolkit-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Handle tool listing
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: TOOLS };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw new Error("Invalid arguments: expected object");
    }

    let result: string;

    switch (name) {
      case "get_uitoolkit_documentation": {
        const topic = (args as Record<string, unknown>).topic;
        if (typeof topic !== "string") {
          throw new Error("Invalid or missing 'topic' argument: expected string");
        }
        result = await handleGetUIToolkitDocumentation(topic);
        break;
      }

      case "get_uitoolkit_code_example": {
        const exampleName = (args as Record<string, unknown>).example_name;
        if (typeof exampleName !== "string") {
          throw new Error("Invalid or missing 'example_name' argument: expected string");
        }
        result = await handleGetUIToolkitCodeExample(exampleName);
        break;
      }

      case "get_unity_script_reference": {
        const className = (args as Record<string, unknown>).class_name;
        if (typeof className !== "string") {
          throw new Error("Invalid or missing 'class_name' argument: expected string");
        }
        result = await handleGetUnityScriptReference(className);
        break;
      }

      case "convert_html_to_uxml": {
        const htmlSnippet = (args as Record<string, unknown>).html_snippet;
        if (typeof htmlSnippet !== "string") {
          throw new Error("Invalid or missing 'html_snippet' argument: expected string");
        }
        result = handleConvertHtmlToUxml(htmlSnippet);
        break;
      }

      case "convert_css_to_uss": {
        const cssSnippet = (args as Record<string, unknown>).css_snippet;
        if (typeof cssSnippet !== "string") {
          throw new Error("Invalid or missing 'css_snippet' argument: expected string");
        }
        result = handleConvertCssToUss(cssSnippet);
        break;
      }

      case "list_uitoolkit_components": {
        const category = (args as Record<string, unknown>).category;
        if (category !== undefined && typeof category !== "string") {
          throw new Error("Invalid 'category' argument: expected string or undefined");
        }
        result = handleListUIToolkitComponents(category as string | undefined);
        break;
      }

      case "read_prerendered_docs": {
        const docType = (args as Record<string, unknown>).doc_type;
        const docName = (args as Record<string, unknown>).doc_name;
        if (typeof docType !== "string") {
          throw new Error("Invalid or missing 'doc_type' argument: expected string");
        }
        if (typeof docName !== "string") {
          throw new Error("Invalid or missing 'doc_name' argument: expected string");
        }
        result = handleReadPrerenderedDocs(docType, docName);
        break;
      }

      case "list_prerendered_docs": {
        result = handleListPrerenderedDocs();
        break;
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [
        {
          type: "text",
          text: result,
        },
      ],
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: "text",
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Unity UIToolkit MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
