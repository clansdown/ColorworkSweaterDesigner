# Agent Guidelines for ColorworkSweaterDesigner

## Build Commands
- `npm run build` - Bundle TypeScript to html/app.js using esbuild
- `npm run dev` - Build with watch mode for development

## Test Commands
- `npm run check` - Check for TypeScript errors using tsc
- No test framework configured. Consider adding Jest or similar.

## Lint Commands
No linter configured. Consider adding ESLint with TypeScript support.

## Code Style Guidelines

### General
- Use TypeScript with strict typing and explicit type annotations
- Require semicolons at end of all statements
- Prefer function declarations for top-level functions (e.g., `function main()`)
- Use camelCase for variables/functions, PascalCase for classes/interfaces

### Imports & Modules
- Use ES6 import/export syntax
- Group imports: external libraries first, then internal modules
- Use relative paths for internal imports

### Async/Await
- Use async/await for asynchronous operations
- Handle errors with try/catch blocks

### UI & Bootstrap
- Use Bootstrap 5.3.8 classes and data attributes
- Support dark/light theme switching via `data-bs-theme`

### Storage
- Use OPFS (Origin Private File System) for file operations
- Handle storage errors gracefully

### Error Handling
- Throw Error objects for exceptional cases
- Validate inputs and handle edge cases