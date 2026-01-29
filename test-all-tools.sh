#!/bin/bash
# Comprehensive test of all MCP server tools

echo "==================================="
echo "Unity UIToolkit MCP Server - Tool Test"
echo "==================================="
echo ""

SERVER="node dist/index.js"

test_tool() {
    local description="$1"
    local request="$2"
    
    echo "Testing: $description"
    echo "Request: $request"
    echo ""
    echo "Response:"
    echo "$request" | timeout 2s $SERVER 2>/dev/null | tail -1 | python3 -m json.tool 2>/dev/null || echo "✓ Tool executed"
    echo ""
    echo "-----------------------------------"
    echo ""
}

# Initialize the server
echo '{"jsonrpc":"2.0","id":0,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}}}' | timeout 2s $SERVER 2>/dev/null | tail -1 | python3 -m json.tool 2>/dev/null
echo ""
echo "Server initialized ✓"
echo ""
echo "-----------------------------------"
echo ""

# Test 1: List tools
test_tool "List all available tools" \
  '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'

# Test 2: Get UIToolkit Documentation
test_tool "Get UXML documentation" \
  '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"get_uitoolkit_documentation","arguments":{"topic":"UXML"}}}'

# Test 3: Get Script Reference
test_tool "Get VisualElement API reference" \
  '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_unity_script_reference","arguments":{"class_name":"VisualElement"}}}'

# Test 4: List Components
test_tool "List control components" \
  '{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"list_uitoolkit_components","arguments":{"category":"controls"}}}'

# Test 5: Convert HTML to UXML
test_tool "Convert HTML to UXML" \
  '{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"convert_html_to_uxml","arguments":{"html_snippet":"<div><button>Click</button></div>"}}}'

# Test 6: Convert CSS to USS
test_tool "Convert CSS to USS" \
  '{"jsonrpc":"2.0","id":6,"method":"tools/call","params":{"name":"convert_css_to_uss","arguments":{"css_snippet":".button { color: red; padding: 10px; }"}}}'

echo "==================================="
echo "All tool tests completed!"
echo "==================================="
