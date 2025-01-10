# Docsify Documentation for PeaPodCMS

This file provides information about the Docsify setup used for PeaPodCMS documentation.

## What is Docsify?

[Docsify](https://docsify.js.org/) is a dynamic documentation generator that converts Markdown files into a well-structured, interactive website. It’s lightweight and doesn’t require a build step, making it ideal for projects like PeaPodCMS.

---

## How It Works

1. **Entry Point**:
   - The `docs/index.html` file serves as the entry point for the documentation website.
   - It initializes Docsify and links the custom theme (`theme.css`).

2. **Sidebar Navigation**:
   - The `_sidebar.md` file in the `docs/` folder defines the navigation menu.

3. **Custom Styles**:
   - The `theme.css` file in the `docs/` folder customizes the appearance of the documentation.

---

## Setup and Usage

### Local Setup

To view the documentation locally:
1. Install Docsify CLI globally:
   ```bash
   npm install -g docsify-cli