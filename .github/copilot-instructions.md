# Lovelace Google Components

Lovelace Google Components is a TypeScript project that builds custom cards for Home Assistant's Lovelace interface. It creates Google Material Design-inspired components including buttons, sliders, climate controls, dashboards, and more. The project uses Rollup.js for bundling and produces a single JavaScript module for Home Assistant.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Build
- Node.js v20+ and npm v10+ are required and available in the environment
- Install dependencies: `npm install` -- takes 8-35 seconds. NEVER CANCEL. Set timeout to 3+ minutes.
- Lint the code: `npm run lint` -- takes 1 second. Always run before building.
- Build the project: `npm run build` -- takes 6 seconds total. NEVER CANCEL. Set timeout to 3+ minutes.
- Start development server: `npm start` -- serves on http://localhost:5001 with hot reload

### Build Process Details
- `npm run build` runs linting first, then Rollup bundling
- Builds from `src/index.ts` to `dist/google-components.js` 
- Output bundle is ~345KB, contains all components and dependencies
- TypeScript warning about version compatibility is expected and harmless
- Rollup warnings about "this" rewriting are expected and harmless

### Development Workflow
- Use `npm start` for development with hot reload on port 5001
- Development server enables CORS for local testing
- Bundle is automatically rebuilt when source files change
- Server output shows build time (typically 2-4 seconds for incremental builds)

## Validation

### Build Validation
- ALWAYS run `npm run lint` before committing changes
- ALWAYS run `npm run build` to verify bundle creation
- Build must complete successfully and produce `dist/google-components.js`
- Bundle should be 300-400KB and contain custom card registrations

### Manual Testing
- There are NO automated tests in this repository
- Validate changes by examining the built bundle contains expected components
- Use development server to test component loading in browser
- For Home Assistant integration, test the built file can be loaded as a JavaScript module

### Code Quality
- ESLint is configured for TypeScript with @typescript-eslint rules
- Prettier is available but not enforced in build process  
- All TypeScript files are in `src/` directory with clear component separation

## Common Tasks

### Component Structure
Components are organized in separate directories under `src/`:
- `google-button/` - Button card component
- `google-slider/` - Slider card component  
- `google-dashboard/` - Dashboard card component
- `google-climate/` - Climate control card component
- `google-control/` - General control card component
- `google-lights-card/` - Lights control card component
- `google-media-overlay/` - Media overlay component
- `shared/` - Shared utilities, models, and assets
- `localize/` - Internationalization support

### Key Files
- `src/index.ts` - Main entry point, registers all custom elements
- `package.json` - Dependencies and npm scripts
- `rollup.config.js` - Rollup bundling configuration
- `tsconfig.json` - TypeScript compiler configuration  
- `.eslintrc.cjs` - ESLint configuration for linting
- `dist/google-components.js` - Built bundle for distribution

### Making Changes
- Edit TypeScript files in `src/` directories
- Run `npm run lint` to check code style
- Run `npm run build` to build and validate changes
- Test with `npm start` development server if needed
- Built file `dist/google-components.js` is committed to repository

### VS Code Setup
Recommended extensions (see `.vscode/extensions.json`):
- ESLint for code linting
- Prettier for code formatting
- Lit Plugin for Lit element development
- TypeScript support

### Repository Structure Output
```
ls -la [repo-root]:
.devcontainer/        - Home Assistant dev container config
.eslintrc.cjs        - ESLint configuration  
.github/             - GitHub workflows (HACS validation)
.gitignore           - Git ignore (node_modules, package-lock.json)
.vscode/             - VS Code settings and tasks
LICENSE              - MIT license
README.md            - Project documentation
dist/                - Built output (google-components.js)
hacs.json            - HACS (Home Assistant Community Store) config
package.json         - NPM dependencies and scripts
rollup.config.js     - Rollup bundler configuration
src/                 - TypeScript source code
tsconfig.json        - TypeScript compiler configuration
```

### Dependencies Overview
The project uses these key dependencies:
- Lit 3.x for web components
- Material Web Components for Material Design
- Home Assistant JS WebSocket for HA integration
- Custom Card Helpers for HA card development
- Material Color Utilities for theming

### Build Timing Expectations
- `npm install`: 8-35 seconds - NEVER CANCEL, set timeout 3+ minutes
- `npm run lint`: 1 second  
- `npm run build`: 6 seconds total - NEVER CANCEL, set timeout 3+ minutes
- Development server startup: 3 seconds
- Incremental rebuild during development: 2-4 seconds

### Known Issues
- TypeScript version warning in ESLint output is expected and harmless
- Rollup "this" rewriting warnings are expected from dependencies and harmless
- No test suite exists - validation must be done manually
- Development server must be stopped with Ctrl+C or tool termination