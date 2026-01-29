# Unity UIToolkit MCP Server - Usage Examples

This directory contains examples of how to use the Unity UIToolkit MCP Server.

## Example 1: Getting Documentation

Request to get UXML documentation:

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "get_uitoolkit_documentation",
    "arguments": {
      "topic": "UXML"
    }
  }
}
```

Response will include:
- Documentation links
- Key concepts
- Basic structure examples
- Common attributes

## Example 2: Converting HTML to UXML

Request to convert HTML:

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "convert_html_to_uxml",
    "arguments": {
      "html_snippet": "<div class='container'>\n  <h1>Welcome</h1>\n  <button id='submitBtn'>Submit</button>\n  <input type='text' placeholder='Enter name' />\n</div>"
    }
  }
}
```

Response will include:
- Detected HTML elements and their UXML equivalents
- General conversion guidelines
- Example conversions
- Key differences between HTML and UXML

## Example 3: Converting CSS to USS

Request to convert CSS:

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "convert_css_to_uss",
    "arguments": {
      "css_snippet": ".button {\n  background-color: #4CAF50;\n  color: white;\n  padding: 15px 32px;\n  font-size: 16px;\n  border-radius: 4px;\n}"
    }
  }
}
```

Response will include:
- Detected CSS properties and their USS equivalents
- Property conversion mappings
- Example conversions
- Unity-specific differences

## Example 4: Getting Script Reference

Request to get ListView API reference:

```json
{
  "jsonrpc": "2.0",
  "id": 4,
  "method": "tools/call",
  "params": {
    "name": "get_unity_script_reference",
    "arguments": {
      "class_name": "ListView"
    }
  }
}
```

Response will include:
- API documentation link
- Key properties and methods
- Usage examples
- Event handlers

## Example 5: Getting Code Examples

Request to get ListView example:

```json
{
  "jsonrpc": "2.0",
  "id": 5,
  "method": "tools/call",
  "params": {
    "name": "get_uitoolkit_code_example",
    "arguments": {
      "example_name": "simple-list-view"
    }
  }
}
```

Response will include:
- Link to Unity's example repository
- Complete code examples
- Common usage patterns

## Example 6: Listing Components

Request to list all controls:

```json
{
  "jsonrpc": "2.0",
  "id": 6,
  "method": "tools/call",
  "params": {
    "name": "list_uitoolkit_components",
    "arguments": {
      "category": "controls"
    }
  }
}
```

Or list all components:

```json
{
  "jsonrpc": "2.0",
  "id": 7,
  "method": "tools/call",
  "params": {
    "name": "list_uitoolkit_components",
    "arguments": {}
  }
}
```

Response will include:
- Component names and descriptions
- UXML syntax
- C# syntax
- Links to additional resources

## Testing the Server

You can test these examples using the included `test.sh` script or by running the server directly:

```bash
node dist/index.js
```

Then paste the JSON-RPC requests from these examples into stdin.

## Integration with Claude Desktop

Add this to your Claude Desktop configuration:

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

Then you can ask Claude questions like:
- "How do I create a ListView in Unity UIToolkit?"
- "Convert this HTML to UXML: [your HTML]"
- "What CSS properties are supported in USS?"
- "Show me example code for a custom control"
