# Unity UIToolkit Documentation

This directory contains pre-rendered Markdown documentation for Unity UIToolkit.

The documentation is automatically updated weekly via GitHub Actions, which:
1. Fetches the latest Unity UIToolkit HTML documentation
2. Converts it to clean Markdown using [markitdown](https://github.com/microsoft/markitdown)
3. Commits the updated documentation back to the repository

## Structure

- `manual/` - Unity Manual pages related to UIToolkit
- `script-api/` - Unity Script API reference for UIToolkit classes

## Usage

The MCP server reads these pre-rendered Markdown files to provide fast, LLM-friendly documentation to agents without needing to fetch and parse HTML at runtime.

## Manual Updates

To manually trigger a documentation update, go to the GitHub Actions tab and run the "Update Unity UIToolkit Documentation" workflow.
