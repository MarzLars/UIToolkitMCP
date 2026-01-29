#!/bin/bash
# Simple test script to verify the MCP server starts correctly

echo "Testing Unity UIToolkit MCP Server..."
echo ""
echo "Starting server (will timeout after 3 seconds)..."
echo ""

# Send initialize request to the server
timeout 3s node dist/index.js << 'EOF' || true
{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test-client","version":"1.0.0"}}}
EOF

echo ""
echo "If you see a JSON response above, the server is working correctly!"
echo ""
echo "To test the server interactively, run:"
echo "  node dist/index.js"
echo ""
echo "Then send JSON-RPC messages like:"
echo '  {"jsonrpc":"2.0","id":1,"method":"tools/list"}'
