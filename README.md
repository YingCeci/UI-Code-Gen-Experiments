# UI Code Gen Experiments

Comparing AI-assisted vs manual Figma-to-code implementations for Angular components.

## Live Demos

- **With Agents**: [View Demo](https://YingCeci.github.io/UI-Code-Gen-Experiments/with-agents/)
- **Without Agents**: [View Demo](https://YingCeci.github.io/UI-Code-Gen-Experiments/without-agents/)

## Overview

This project demonstrates two approaches to converting a Figma design into Angular code:

### With Agents (Agent-Assisted)

Uses a 3-agent workflow:
1. **Figma Data Extractor** - Extracts design data from Figma via MCP
2. **Component Matcher** - Maps Figma layers to design system components (Bootstrap + ExosThemeAlpaca)
3. **Angular Code Generator** - Generates Angular 17+ standalone components

Benefits:
- Automatic design system component identification
- Deviation detection from design system defaults
- Bootstrap-first approach (utilities before custom SCSS)

### Without Agents (Manual)

Traditional manual implementation directly from the Figma design without using the agent workflow.

## Tech Stack

- Angular 17+ (Standalone Components)
- Bootstrap 5.3.3
- TypeScript
- SCSS

## Project Structure

```
UI-Code-Gen-Experiments/
├── with-agents/          # Source: Agent-assisted implementation
├── without-agents/       # Source: Manual implementation
├── docs/                 # GitHub Pages (built files)
│   ├── index.html        # Landing page
│   ├── with-agents/      # Built Angular app
│   └── without-agents/   # Built Angular app
└── README.md
```

## Local Development

```bash
# With Agents version
cd with-agents
npm install
npm start
# Open http://localhost:4200

# Without Agents version
cd without-agents
npm install
npm start
# Open http://localhost:4200
```

## Building for Production

```bash
# Build With Agents
cd with-agents
ng build --configuration=production --base-href="/UI-Code-Gen-Experiments/with-agents/"

# Build Without Agents
cd without-agents
ng build --configuration=production --base-href="/UI-Code-Gen-Experiments/without-agents/"
```
