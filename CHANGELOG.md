# Changelog

## v0.3.0 (September 23, 2015) - commit
- Fix `$brand-sidebar-dk` color.

## v0.3.0 (September 23, 2015) - commit
- Rename `$brand-neutral-dk` and `$brand-neutral-dker` to `$brand-sidebar` and `$brand-sidebar-dk` respectively.
- Add `$font-size-small` variable.

## v0.2.1 (September 23, 2015) - commit
- Remove horizontal margins from button-button sibling.
- Vertically center icons.

## v0.2.0 (September 22, 2015) - commit
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

## v0.1.14 (September 22, 2015) - commit
- Rename `$brand-blue` color to `$brand-primary`.
- Fix `$brand-primary` and `$brand-sky-dk` hex values (by simply switching the values).
- Update active `list-group` `menuitem` to have default cursor when hovered (instead of a pointer).

## v0.1.12 (September 22, 2015) - commit
- Add icon sizes.

## v0.1.11 (September 22, 2015) - commit
- Add `-primary` modifier for panels.
- Add icons.

## v0.1.10 (September 21, 2015) - commit
- Fix vertical rhythm for text
- Deprecate `.text-sky`, etc (text variants); add `._text-sky`, etc; Add `_` prefixes.

## v0.1.9 (September 15, 2015) - commit
- Add `!important` priority for all utility classes.
- Deprecate `centered`; add `._centered`.

## v0.1.8 (September 15, 2015) - commit
- Add text alignment utilities

## v0.1.7 (September 15, 2015) - commit
- Add text transform utilities

## v0.1.6 (September 15, 2015) - commit
- Improve badge styling
- Rename `*-lg` variables to `*-large`.

## v0.1.5 (September 15, 2015) - commit
- Add spacers

## v0.1.4 (September 15, 2015) - commit
- Fix grid not working properly (not responsive).

## v0.1.3 (September 14, 2015) - commit
- Remove `.-narrow`, `.-narrower`, `.-centered` modifier for **Slate**.

## v0.1.2 (September 14, 2015) - commit
- Add `.-rounded` modifier for **Button Group**.

## v0.1.1 (September 14, 2015) - commit
- Add `.-rounded` modifier for **Button**.
- Fix build script.


## v0.1.0 (September 14, 2015) - commit
Init commit; almost all basic components
