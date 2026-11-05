# Changelog

## [1.0.0](https://github.com/gravity-ui/normalized-list/compare/v0.1.1...v1.0.0) (2026-11-05)


### ⚠ BREAKING CHANGES

* The /uikit entry now requires @gravity-ui/uikit ^8.0.0 and React 18 or 19.

### Features

* migrate UIKit presets to UIKit 8 ([#4](https://github.com/gravity-ui/normalized-list/issues/4)) ([8a17308](https://github.com/gravity-ui/normalized-list/commit/8a173089dc9c6c98dc1efe542cdd527ee81ccc43))

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
