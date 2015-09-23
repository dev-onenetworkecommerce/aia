# Changelog

## v0.3.1 (September 23, 2015) - [commit](https://github.com/dev-onenetworkecommerce/aia/commit/02852e2c29325be6d215d4d92cb46a8653c55e3f)
- Fix `$brand-sidebar-dk` color.

## v0.3.0 (September 23, 2015) - [commit](https://github.com/dev-onenetworkecommerce/aia/commit/e2e2fecd58516794941fd38f8b1c682271e28af5
- Rename `$brand-neutral-dk` and `$brand-neutral-dker` to `$brand-sidebar` and `$brand-sidebar-dk` respectively.
- Add `$font-size-small` variable.

## v0.2.1 (September 23, 2015) - [commit](https://github.com/dev-onenetworkecommerce/aia/commit/6cf06c9c93d622b00d4fd3336b94bfd476fe38b2)
- Remove horizontal margins from button-button sibling.
- Vertically center icons.

## v0.2.0 (September 22, 2015) - [commit](https://github.com/dev-onenetworkecommerce/aia/commit/ad6b3491edb2d5a6d2c9787a0d782c3ac08b5670)
- Add `icon` class selector; remove `icon-` class pattern selector.
```sass
// old
<i class="icon-yolo" />

// new
<i class="icon icon-yolo" />
```
- Add icon utils for Slate, List Group, and Alert.
- Remove `.centered.` (replaced with `._centered`).
- Remove text color variants `.text-*.` (replaced with `._`; prefixed with `_`).

## v0.1.14 (September 22, 2015) - [commit](https://github.com/dev-onenetworkecommerce/aia/commit/04e923872d4556d15803ee4936af3eec527b3d24)
- Rename `$brand-blue` color to `$brand-primary`.
- Fix `$brand-primary` and `$brand-sky-dk` hex values (by simply switching the values).
- Update active `list-group` `menuitem` to have default cursor when hovered (instead of a pointer).

## v0.1.12 (September 22, 2015)
- Add icon sizes.

## v0.1.11 (September 22, 2015)
- Add `-primary` modifier for panels.
- Add icons.

## v0.1.10 (September 21, 2015)
- Fix vertical rhythm for text
- Deprecate `.text-sky`, etc (text variants); add `._text-sky`, etc; Add `_` prefixes.

## v0.1.9 (September 15, 2015)
- Add `!important` priority for all utility classes.
- Deprecate `centered`; add `._centered`.

## v0.1.8 (September 15, 2015)
- Add text alignment utilities

## v0.1.7 (September 15, 2015)
- Add text transform utilities

## v0.1.6 (September 15, 2015)
- Improve badge styling
- Rename `*-lg` variables to `*-large`.

## v0.1.5 (September 15, 2015)
- Add spacers

## v0.1.4 (September 15, 2015)
- Fix grid not working properly (not responsive).

## v0.1.3 (September 14, 2015)
- Remove `.-narrow`, `.-narrower`, `.-centered` modifier for **Slate**.

## v0.1.2 (September 14, 2015)
- Add `.-rounded` modifier for **Button Group**.

## v0.1.1 (September 14, 2015)
- Add `.-rounded` modifier for **Button**.
- Fix build script.


## v0.1.0 (September 14, 2015)
Init commit; almost all basic components
