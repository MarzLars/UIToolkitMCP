# Unity UIToolkit MCP Server

A Model Context Protocol (MCP) server that provides LLM agents with access to Unity UIToolkit documentation, code examples, and conversion tools for migrating HTML/CSS to UXML/USS.

## Features

This MCP server provides the following tools for working with Unity UIToolkit:

### Pre-rendered Documentation (Recommended)
- **list_prerendered_docs**: Lists all available pre-rendered Markdown documentation
- **read_prerendered_docs**: Reads clean, LLM-friendly Markdown documentation converted from Unity's HTML docs

> **Note:** Pre-rendered documentation is automatically fetched and converted weekly via GitHub Actions using [markitdown](https://github.com/microsoft/markitdown). This provides faster access, better LLM digestibility, and eliminates runtime dependencies on external sites.

### Legacy Documentation Tools
- **get_uitoolkit_documentation**: Provides Unity UIToolkit documentation reference with links and examples for specific topics (UXML, USS, VisualElement, etc.)
- **get_unity_script_reference**: Access Unity Script API reference documentation for UIToolkit classes and methods
- **list_uitoolkit_components**: List available UIToolkit components and controls by category

### Code Examples
- **get_uitoolkit_code_example**: Provides common Unity UIToolkit code example patterns with links to Unity's official examples repository

### Conversion Tools
- **convert_html_to_uxml**: Convert HTML markup to UXML format with guidance and best practices
- **convert_css_to_uss**: Convert CSS styles to USS (Unity Style Sheets) format with property mappings

## Documentation Pre-rendering

Unity UIToolkit documentation is automatically fetched and converted to Markdown:

- **Schedule**: Weekly on Mondays at 00:00 UTC
- **Trigger**: Can be manually triggered via GitHub Actions
- **Process**: 
  1. Fetches latest Unity UIToolkit HTML documentation
  2. Filters to UIToolkit-related pages only
  3. Converts to clean Markdown using [markitdown](https://github.com/microsoft/markitdown)
  4. Commits to `docs/` directory

See [.github/workflows/update-unity-docs.yml](.github/workflows/update-unity-docs.yml) for implementation details.

## Installation

```bash
npm install
npm run build
```

## Usage

This MCP server uses the stdio transport and can be integrated with any MCP-compatible client.

### Configuration

Add to your MCP client configuration (e.g., Claude Desktop config):

```json
{
  "mcpServers": {
    "uitoolkit": {
      "command": "node",
      "args": ["/path/to/UIToolkitMCP/dist/index.js"]
    }
  }
}
```

Or use npx:

```json
{
  "mcpServers": {
    "uitoolkit": {
      "command": "npx",
      "args": ["uitoolkit-mcp-server"]
    }
  }
}
```

## Available Tools

### 1. list_prerendered_docs
Lists all available pre-rendered documentation files.

**Parameters:** None

**Example:**
```typescript
{}
```

### 2. read_prerendered_docs
Reads pre-rendered Markdown documentation.

**Parameters:**
- `doc_type` (string): Either "manual" or "script-api"
- `doc_name` (string): Name of the documentation file (e.g., "UXML", "UIElements_VisualElement")

**Example:**
```typescript
{
  "doc_type": "manual",
  "doc_name": "UXML"
}
```

### 3. get_uitoolkit_documentation
Retrieves Unity UIToolkit documentation for specific topics.

**Parameters:**
- `topic` (string): The UIToolkit topic to search for (e.g., "UXML", "USS", "VisualElement")

**Example:**
```typescript
{
  "topic": "UXML"
}
```

### 4. get_uitoolkit_code_example
Provides common Unity UIToolkit code example patterns with links to Unity's official repository.

**Parameters:**
- `example_name` (string): Name or path of the example (e.g., "simple-list-view", "custom-control")

**Example:**
```typescript
{
  "example_name": "simple-list-view"
}
```

### 5. get_unity_script_reference
Retrieves Unity Script API reference for UIToolkit classes.

**Parameters:**
- `class_name` (string): The Unity class name (e.g., "VisualElement", "ListView", "Button")

**Example:**
```typescript
{
  "class_name": "ListView"
}
```

### 6. convert_html_to_uxml
Provides guidance for converting HTML to UXML.

**Parameters:**
- `html_snippet` (string): HTML code to convert

**Example:**
```typescript
{
  "html_snippet": "<div class='container'><button>Click Me</button></div>"
}
```

### 7. convert_css_to_uss
Provides guidance for converting CSS to USS.

**Parameters:**
- `css_snippet` (string): CSS code to convert

**Example:**
```typescript
{
  "css_snippet": ".button { background-color: blue; padding: 10px; }"
}
```

### 8. list_uitoolkit_components
Lists available UIToolkit components.

**Parameters:**
- `category` (string, optional): Filter by category ("containers", "controls", "data-bound", "advanced")

**Example:**
```typescript
{
  "category": "controls"
}
```

## Resources

- [Unity UIToolkit Documentation](https://docs.unity3d.com/Manual/UIElements.html)
- [Unity Script Reference](https://docs.unity3d.com/ScriptReference/UnityEngine.UIElements.html)
- [Unity UIToolkit Code Examples](https://github.com/Unity-Technologies/ui-toolkit-manual-code-examples)

## Development

### Build
```bash
npm run build
```

### Watch Mode
```bash
npm run watch
```

## License

MIT
