# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository overview
- This repo contains multiple independent front-end lab projects. Most are vanilla HTML/CSS/JS exercises at the top level (e.g., bookSystem, formValidation, colorfulMemoryGame). There is also a React section under react-app-lab with two separate Create React App projects (react-apps and todoapp).
- There is no single build for the entire repo; treat each lab/app as its own project.

Common commands
- Node and npm are only used inside the Create React App subprojects.
- Shell: PowerShell (pwsh) is available; commands below assume pwsh on Windows.

React apps (Create React App)
- Locations:
  - react-app-lab/react-apps
  - react-app-lab/todoapp
- Install dependencies (per app):
  - cd react-app-lab/react-apps; npm install
  - cd react-app-lab/todoapp; npm install
- Start dev server (per app):
  - npm start
  - Opens http://localhost:3000 by default
- Run tests:
  - npm test
  - Run a single test file (by pattern):
    - set CI=true; npm test -- App.test.js
    - or filter by test name (watch prompt) after starting npm test
- Build production bundle:
  - npm run build
- Eject (not recommended for labs):
  - npm run eject

Vanilla JS labs
- These are static HTML/JS/CSS files. Open the .html files in a browser or serve them with a simple static server.
- Quick local static server options:
  - PowerShell (Python 3): python -m http.server 3000
  - Node (if installed globally): npx serve . -l 3000
- Example: to run the Health Article lab with the existing VS Code launch config:
  - The repository includes .vscode/launch.json pointing to http://127.0.0.1:3000/healthArticle/health_article.html, so serving the repo root at port 3000 makes it accessible at that URL.

Linting
- No top-level ESLint or prettier config is present. CRA projects include React App ESLint via react-scripts.

Testing
- Only the CRA projects include a Jest setup (via react-scripts). The vanilla labs have no automated tests.

High-level architecture and structure
- Monorepo of small, self-contained labs rather than a single application.
- Top-level directories (non-React) follow a simple browser-only architecture:
  - index or lab-specific .html files load one .js file that manipulates the DOM directly using document APIs and inline event handlers or addEventListener.
  - Example patterns:
    - healthArticle/health_article.js requests a local JSON (health_article.json) via XMLHttpRequest and dynamically constructs DOM elements for rendering.
    - bookSystem/book_system.js maintains an in-memory array (books) and updates the DOM on add/delete actions.
    - colorfulMemoryGame/colorful_memory_game.js implements game state in module-level variables, wiring click handlers to dynamically generated elements; a simple timer loop controls gameplay.
- React subprojects (react-app-lab):
  - Standard Create React App structure with src/App.js as the entry UI component, src/index.js bootstrapping React to the DOM, and testing via react-scripts with Testing Library.
  - react-apps/src/App.js demonstrates data fetching with axios from an external API and rendering tabular data with basic inline styles.
  - todoapp is the default CRA scaffold with placeholder content.

Conventions and notes for future automation
- There is no shared package.json at the repo root; operations must target individual subprojects.
- Serving the repo at http://127.0.0.1:3000 will satisfy some hardcoded assumptions (e.g., the .vscode Chrome launch target and relative JSON fetches).
- When editing vanilla labs, changes are immediately reflected on refresh; no bundler is involved.
- For React apps, use npm scripts provided by react-scripts; prefer filtering tests by filename pattern when running a single test.

Pulling in important README details
- The Create React App READMEs in react-app-lab/react-apps and react-app-lab/todoapp document the standard CRA commands (start, test, build, eject). This WARP.md consolidates those per-project commands and adds guidance for running single tests and serving static labs.

