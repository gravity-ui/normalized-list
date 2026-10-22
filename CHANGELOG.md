# Changelog

## [0.1.1](https://github.com/gravity-ui/normalized-list/compare/v0.1.0...v0.1.1) (2026-10-22)


### Bug Fixes

* render ReactNode titles of selected options instead of [object Object] ([c63d1d4](https://github.com/gravity-ui/normalized-list/commit/c63d1d4dec8d904eb57f38e22cf2ca4815247851))

## 0.1.0 (2026-08-21)

Initial release of `@gravity-ui/normalized-list`.

### Features

* **`useNormalizedList`** — one model for flat and tree items: id-keyed data, hierarchy, visible order, selection, expansion, and focus
* **`NormalizedList` / `NormalizedSelect`** — UI on top of that model, customizable via render props
* **`@gravity-ui/normalized-list/uikit`** — optional UIKit presets (`UIKitNormalizedList`, `UIKitNormalizedSelect`)

Migrating from `@gravity-ui/uikit/unstable` (`useList`, `TreeList`, `TreeSelect`)? See [MIGRATION.md](./MIGRATION.md).
