# Colorwork Sweater Designer

A single-page TypeScript application for designing colorwork sweaters, built with Bootstrap 5 and featuring Origin Private File System (OPFS) support for client-side data storage.

## Features

- 🎨 **TypeScript-based** - Fully typed application with strict type checking
- 🌙 **Dark Mode Support** - Automatic detection of browser theme preference with manual override
- 📦 **OPFS Storage** - Client-side file storage using the Origin Private File System API
- ⚡ **Fast Build** - esbuild for lightning-fast bundling
- 🔄 **Watch Mode** - Automatic recompilation on file changes during development
- 🎯 **Bootstrap 5** - Modern, responsive UI framework

## Screenshots

### Light Mode
![Light Mode](https://github.com/user-attachments/assets/1cec54f5-d661-4a55-bbf8-3b0d8f7cefe4)

### Dark Mode
![Dark Mode](https://github.com/user-attachments/assets/ec15cdcf-f722-4def-afc8-91e2e33a5e31)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/clansdown/ColorworkSweaterDesigner.git
cd ColorworkSweaterDesigner
```

2. Install dependencies:
```bash
npm install
```

## Development

### Build the application

Build the TypeScript application with type checking:

```bash
npm run build
```

This command runs:
1. `npm run typecheck` - Type checks the TypeScript code
2. `npm run bundle` - Bundles the application using esbuild

### Watch mode for development

Start watch mode for automatic recompilation on file changes:

```bash
npm run watch
```

or

```bash
npm run dev
```

This will rebuild the application automatically whenever you save changes to TypeScript files.

### Running the application

After building, serve the application using any static file server. For example:

```bash
# Using Python's built-in HTTP server
python3 -m http.server 8080

# Using Node.js http-server (install with: npm install -g http-server)
http-server -p 8080

# Using Python 2
python -m SimpleHTTPServer 8080
```

Then open your browser and navigate to `http://localhost:8080`

## Project Structure

```
ColorworkSweaterDesigner/
├── src/
│   ├── app.ts              # Main application entry point with init() function
│   └── lib/
│       └── storage.ts      # OPFS storage utility for easy file operations
├── dist/
│   └── app.js              # Bundled JavaScript output
├── index.html              # Main HTML file with Bootstrap 5 and dark mode support
├── package.json            # Node.js dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Scripts

- `npm run build` - Build the application (typecheck + bundle)
- `npm run typecheck` - Run TypeScript type checking without emitting files
- `npm run bundle` - Bundle the application with esbuild
- `npm run watch` - Watch for changes and rebuild automatically
- `npm run dev` - Alias for watch mode

## OPFS Storage API

The application includes a utility class for working with the Origin Private File System (OPFS). Example usage:

```typescript
import { storage, OPFSStorage } from './lib/storage';

// Check if OPFS is supported
if (OPFSStorage.isSupported()) {
  // Initialize storage
  await storage.initialize();
  
  // Write a file
  await storage.writeFile('myfile.txt', 'Hello, World!');
  
  // Read a file
  const content = await storage.readFile('myfile.txt');
  
  // List all files
  const files = await storage.listFiles();
  
  // Check if file exists
  const exists = await storage.fileExists('myfile.txt');
  
  // Delete a file
  await storage.deleteFile('myfile.txt');
}
```

## Browser Compatibility

- **OPFS Support**: Chrome/Edge 102+, Safari 15.2+
- **Bootstrap 5**: All modern browsers
- **TypeScript**: Compiled to ES2020, compatible with all modern browsers

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [esbuild](https://esbuild.github.io/) - Fast JavaScript bundler
- [Bootstrap 5](https://getbootstrap.com/) - CSS framework
- [OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) - Origin Private File System API

## License

See the [LICENSE](LICENSE) file for details.