# Contributing to Unity UIToolkit MCP Server

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/MarzLars/UIToolkitMCP.git
cd UIToolkitMCP
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Test your changes:
```bash
./test.sh
```

## Project Structure

```
UIToolkitMCP/
├── src/
│   └── index.ts          # Main MCP server implementation
├── dist/                 # Build output (generated)
├── examples/             # Usage examples
├── test.sh              # Simple test script
├── package.json         # Project configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Main documentation
```

## Adding New Features

### Adding a New Tool

1. Define the tool in the `TOOLS` array:
```typescript
{
  name: "your_tool_name",
  description: "Description of what your tool does",
  inputSchema: {
    type: "object",
    properties: {
      param_name: {
        type: "string",
        description: "Parameter description",
      },
    },
    required: ["param_name"],
  },
}
```

2. Create a handler function:
```typescript
async function handleYourTool(paramName: string): Promise<string> {
  // Implementation
  return "Result";
}
```

3. Add the case to the switch statement in the request handler:
```typescript
case "your_tool_name":
  result = await handleYourTool(args.param_name as string);
  break;
```

### Updating Documentation Data

The server contains several reference data structures:
- `HTML_TO_UXML_CONVERSIONS`: HTML to UXML element mappings
- `CSS_TO_USS_PROPERTIES`: CSS to USS property mappings
- `UITOOLKIT_COMPONENTS`: Component catalog by category

To add new mappings or components, edit these data structures in `src/index.ts`.

## Code Style

- Use TypeScript strict mode
- Follow existing code formatting
- Add JSDoc comments for public functions
- Keep functions focused and single-purpose
- Use descriptive variable names

## Testing

Before submitting a PR:

1. Build the project without errors:
```bash
npm run build
```

2. Test the server starts correctly:
```bash
./test.sh
```

3. Test your new tools/features manually using JSON-RPC requests

4. Ensure no TypeScript errors:
```bash
npm run build
```

## Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test thoroughly
5. Commit with clear messages: `git commit -m "Add: description of changes"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Pull Request Guidelines

- Provide a clear description of the changes
- Link any related issues
- Ensure the build passes
- Update documentation if needed
- Add examples for new features

## Documentation Updates

When adding new features:
- Update the main README.md
- Add examples to examples/README.md
- Update tool descriptions to be clear and helpful

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about implementation
- Documentation improvements

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
