# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.4.0](https://github.com/paulirv/peapodcms/compare/v1.3.0...v1.4.0) (2025-01-11)


### Features

* change body tag to use id for app container in index.html ([5fd3d5d](https://github.com/paulirv/peapodcms/commit/5fd3d5d839d51dff6b1d35b69bb376b98d3a0efa))
* refactor App component to use Fragment and update Page component structure ([f59d945](https://github.com/paulirv/peapodcms/commit/f59d9454f997ad93b00f9596afdf17ee5329d4a2))
* update Babel configuration to use automatic runtime for Preact ([94337f2](https://github.com/paulirv/peapodcms/commit/94337f27eb483eb000f4105ef160e9fb4c232633))

## [1.3.0](https://github.com/paulirv/peapodcms/compare/v1.2.2...v1.3.0) (2025-01-11)


### Features

* add buffer and path-browserify dependencies ([d77d09c](https://github.com/paulirv/peapodcms/commit/d77d09c271f98b2ecb3ef9c10f6a923d28126ce9))
* add copy-webpack-plugin dependency ([ba9c778](https://github.com/paulirv/peapodcms/commit/ba9c77812031dd99164e8ebb0f20b12c8c60b773))
* add Markdown content for About, Contact, Home pages and a sample blog post ([d482551](https://github.com/paulirv/peapodcms/commit/d48255113e93240557a59ec445b39748ed5069e1))
* add Page component to fetch and display Markdown content ([1d29475](https://github.com/paulirv/peapodcms/commit/1d294753b92045a2f553b9a068e3ca24481f46c9))
* add utility function to fetch and parse Markdown content ([577bc99](https://github.com/paulirv/peapodcms/commit/577bc9973dcf213b650c9f37d10a5b85e37ee93e))
* enhance webpack configuration with CopyWebpackPlugin and buffer fallback ([0abc3d0](https://github.com/paulirv/peapodcms/commit/0abc3d03f09fc8d58517c9114aff8dc49c1ba4f4))
* implement routing with preact-router for main application pages ([a66c172](https://github.com/paulirv/peapodcms/commit/a66c1725c28c52a1746369818bf9ab4f8d8d2526))

### [1.2.2](https://github.com/paulirv/peapodcms/compare/v1.2.1...v1.2.2) (2025-01-10)

### [1.2.1](https://github.com/paulirv/peapodcms/compare/v1.2.0...v1.2.1) (2025-01-10)


### Bug Fixes

* update README for improved documentation link clarity ([6fdeee8](https://github.com/paulirv/peapodcms/commit/6fdeee8a4aaa4c3ad3fb4495e10d03c6453b9b77))

## [1.2.0](https://github.com/paulirv/peapodcms/compare/v1.1.0...v1.2.0) (2025-01-10)


### Features

* add standard-version for automated versioning and changelog management ([54a7f59](https://github.com/paulirv/peapodcms/commit/54a7f5949623a0c1e2211bdb87058aad459e7ca0))

## [1.1.0] (2025-01-10)

### Features

* add standard-version for automated changelog and versioning ([2e03103](https://github.com/paulirv/peapodcms/commit/2e031036fa0e81c9a024dff937795304ed92b6c3))

### Added
- Initial project structure with Webpack, Babel, and Preact setup.
- Initial documentation for the project.
- Custom Docsify theme in `theme.css`.
- Sidebar navigation in `_sidebar.md`.

### Changed
- Updated Webpack configuration to include `mode`.

### Fixed
- Resolved warning for missing `mode` in Webpack.

### Added
- Created a basic App component with a welcome message.
- Configured Babel and Webpack for development and SCSS support.
