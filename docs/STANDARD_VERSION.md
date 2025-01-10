# Standard-Version Documentation

This document explains how to use **standard-version** for managing versioning and changelogs in the PeaPodCMS project.

---

## What is Standard-Version?

[Standard-Version](https://github.com/conventional-changelog/standard-version) is a tool for automating versioning and changelog updates based on **Semantic Versioning (SemVer)** and **Conventional Commits**.

---

## Usage

### Releasing a New Version

1. Ensure all recent commits follow the [Conventional Commits](COMMIT_GUIDELINES.md) format.
2. Run the following command to create a new release:
    ```bash
    npm run release
3. This will:
- Update the `version` field in `package.json`.
- Generate or update the `CHANGELOG.md` file.
- Commit the changes and create a Git tag (e.g., `v1.0.0`).
4. Push the changes and tags to the repository:
    ```bash
    git push –follow-tags origin main
---

## Example Workflow

### Commit Example

Before running `npm run release`, ensure your commit messages follow the [Conventional Commits](COMMIT_GUIDELINES.md) specification:

- **Feature**: `feat: add dynamic routing for blog posts`
- **Fix**: `fix: resolve Webpack mode warning`
- **Chore**: `chore: update dependencies`

### Release Example

After running `npm run release`:
- `package.json` is updated:
    ```json
    {
    "version": "1.1.0"
    }

- `CHANGELOG.md` includes:
    ```markdown
    ## [1.1.0] - 2025-01-10
    ### Added
    - Add dynamic routing for blog posts.

## Configuration

The release script is defined in package.json:
    ```json
    "scripts": {
    "release": "standard-version"
    }

## References
- [Standard-Version Documentation](https://github.com/conventional-changelog/standard-version)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning (SemVer)](https://semver.org/)