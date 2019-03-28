# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.4] - 2019-03-28
### Added
- [JS] React Select with Auto Complete
- Crud Controller merges current_user into trailblazer run options
- Now there are two generators reativo:op reativo:js
- Install Generator

### Fixed
- Crud Controller calls right operations new (Create::Present), and edit (Update::Present)
- Template for operation Index dont call Model.all to avoid data leaking
- Generator op now generates the representer module name correactly

## [0.1.3] - 2019-03-26
### Added
- [JS] Add babel-polyfill

### Changed
- [JS] Revert the @babel/plugin-transform-generator

### Removed
- [JS] Remove (finally) the dummy `Hello` component

## [0.1.2] - 2019-03-26
### Added
- [JS] Add @babel/plugin-transform-regenerator as dev dependency

## [0.1.1] - 2019-03-26
### Added
- JS Library, now releases will be sync

### Changed 
- Dependencies are much more flexible

## [0.1.0] - 2019-03-26
### Added
- Generator
- Reativo Crud Controller

[Unreleased]: https://github.com/fernandes/reativo/compare/v0.1.4...HEAD
[0.1.4]: https://github.com/fernandes/reativo/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/fernandes/reativo/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/fernandes/reativo/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/fernandes/reativo/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/fernandes/reativo/releases/tag/v0.1.1
