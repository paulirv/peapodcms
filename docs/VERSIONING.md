# Versioning

PeaPodCMS uses [Semantic Versioning (SemVer)](https://semver.org/) to track changes and manage releases.

## Versioning Format
- `MAJOR.MINOR.PATCH`
  - **MAJOR**: Incompatible changes.
  - **MINOR**: Backward-compatible new features.
  - **PATCH**: Bug fixes.

## Automating Releases
- Use [standard-version](https://github.com/conventional-changelog/standard-version) for managing versions and changelogs.
- Run `npm run release` to:
  - Increment the version.
  - Update the changelog.
  - Tag the release.

## Pre-Releases
Use pre-release tags for experimental features:
- `alpha`: Early testing versions (e.g., `1.2.0-alpha.1`).
- `beta`: Feature-complete but under testing.
- `rc`: Release candidates.