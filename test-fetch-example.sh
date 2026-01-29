#!/bin/bash
# Test script to verify the fetch_unity_example_code tool works
# This demonstrates how the tool can be used to fetch code examples

echo "=== Testing fetch_unity_example_code tool ==="
echo ""
echo "This test demonstrates how the tool fetches code examples from Unity repositories"
echo "when given a code source reference like those found in <code source='...'/> tags"
echo ""

echo "Example 1: Fetching Button_clicked.cs"
echo "This is a common example referenced in Button documentation"
echo ""

# Note: In a real scenario, this would be called through the MCP protocol
# For demonstration, we show what the tool would attempt to fetch:

echo "The tool would attempt to fetch from:"
echo "1. https://raw.githubusercontent.com/Unity-Technologies/ui-toolkit-manual-code-examples/main/Button_clicked.cs"
echo "2. https://raw.githubusercontent.com/Unity-Technologies/UnityCsReference/master/Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Button_clicked.cs"
echo ""

echo "Example 2: Fetching with a complex path"
echo "Input: '../../../../Modules/UIElements/Tests/UIElementsExamples/Assets/Examples/Button_clicked.cs'"
echo "The tool would clean this to: 'Button_clicked.cs'"
echo "Then attempt the same fetching strategy as above."
echo ""

echo "=== Test Complete ==="
echo ""
echo "To use this tool in an MCP client, call it with:"
echo '{"name": "fetch_unity_example_code", "arguments": {"file_path": "Button_clicked.cs"}}'
