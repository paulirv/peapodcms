# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.5.0](https://github.com/paulirv/peapodcms/compare/v1.4.0...v1.5.0) (2025-01-12)


### Features

* add @babel/runtime and @babel/plugin-transform-runtime for improved Babel support ([842adbb](https://github.com/paulirv/peapodcms/commit/842adbbec2e52897305579104d52e099c7854ce9))
* add @testing-library/jest-dom for enhanced testing capabilities ([f853037](https://github.com/paulirv/peapodcms/commit/f85303740e4c632f1fbb1ef119e97f18270e74c8))
* add browserslist configuration ([4ba89e5](https://github.com/paulirv/peapodcms/commit/4ba89e5383040fc7d42b746b6b3358032dddeca4))
* add core-js and regenerator-runtime for improved compatibility and async support ([0dcca26](https://github.com/paulirv/peapodcms/commit/0dcca2696597e19eeeecb99ea2c30941cce003ec))
* add core-js dependency for improved compatibility and polyfill support ([30ffe87](https://github.com/paulirv/peapodcms/commit/30ffe874a36c8ff25f467cf9a5748fd2b11fd214))
* add jest and babel-jest for improved testing support ([9e4a8f5](https://github.com/paulirv/peapodcms/commit/9e4a8f57c02d44efc48affa47c52c933afcc9611))
* add Jest configuration for testing with Babel and jsdom ([185b3a2](https://github.com/paulirv/peapodcms/commit/185b3a2b1677a22f9320b2721af3c6cc25d4f6f5))
* add jest.setup.js for configuring @testing-library/jest-dom ([fcc62b8](https://github.com/paulirv/peapodcms/commit/fcc62b85eacae8a120ac1c7933fc0d1c311236b6))
* add Makefile for project build, testing, and deployment automation ([565aceb](https://github.com/paulirv/peapodcms/commit/565acebf82199b65629c226cd1ce80e6d0288ef4))
* add markdown parser utility using marked library ([caf91b7](https://github.com/paulirv/peapodcms/commit/caf91b7b3dba6740963454f82537c1e59d84de8b))
* add module type and jest-environment-jsdom for improved module support and testing ([e52312e](https://github.com/paulirv/peapodcms/commit/e52312e54661b63fca1001bbace05473d843c5c2))
* integrate markdown parsing into Page component ([686bc1d](https://github.com/paulirv/peapodcms/commit/686bc1d89cf5b7bc50cfde41446b099003782c1a))
* migrate webpack configuration to ES module syntax and handle __dirname ([a87d132](https://github.com/paulirv/peapodcms/commit/a87d132da10f685b7f0797e802a63e9c1e77f9e7))
* restore buffer and path-browserify dependencies in package.json and package-lock.json ([27ea630](https://github.com/paulirv/peapodcms/commit/27ea630571276ee7d7158a9a343de8c8b518dd39))
* restore core-js dependency in package.json and package-lock.json ([6c8149e](https://github.com/paulirv/peapodcms/commit/6c8149e2fd26cefda3b7d4b06499c3485aedac58))
* update Babel configuration for improved compatibility and polyfill management ([ebb7c68](https://github.com/paulirv/peapodcms/commit/ebb7c6897677996e7eacbd10219fac26f27f1ade))
* update Babel configuration for improved polyfill management and enable tree-shaking ([3fddd60](https://github.com/paulirv/peapodcms/commit/3fddd60d4c84d7df14d44d2a6784ff49b0460f9e))
* update import statements to include file extensions and add error handling for rendering ([33eb43f](https://github.com/paulirv/peapodcms/commit/33eb43f26813ff6c6748d173154bf6dfcc238957))
* update import statements to include file extensions and improve error logging in Page component ([af93ed9](https://github.com/paulirv/peapodcms/commit/af93ed912443d2633633aea93c24d594fce314ab))
* update Jest configuration for improved testing and add Markdown rendering tests ([6596dce](https://github.com/paulirv/peapodcms/commit/6596dce6edac3f56428b94e1b50e2b64099d558f))
* update Page component to set document title and meta description based on content ([f295bdf](https://github.com/paulirv/peapodcms/commit/f295bdf083a97a1d7217e819a229a95196a4a1b5))
* update test scripts to use Jest for improved testing experience ([7d4c014](https://github.com/paulirv/peapodcms/commit/7d4c0146044a018464709ddb356fa21fdaa465ad))

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
