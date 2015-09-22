## aia [![npm version](http://img.shields.io/npm/v/aia.svg?style=flat-square)](https://npmjs.org/package/aia?style=flat-square) [![Build Status](https://img.shields.io/travis/dev-onenetworkecommerce/aia.svg?style=flat-square)](https://travis-ci.org/dev-onenetworkecommerce/aia?branch=master)
```
npm install aia --save
```
The UI Kit that powers ONE's internal projects built on [ReactJS](reactjs.org) and [Sass](sass-lang.com).

Check the [docs](https://rawgit.com/dev-onenetworkecommerce/aia/master/docs/index.html#/scaffolding?_k=wflhj2).

## Usage
If you're using sass, you can simply import the `scss` file.
```sass
@import "path/to/aia/main.scss";
```

Otherwise, you can get the CSS file directly.
```html
<link href="path/to/aia/aia.scss" rel="stylesheet">
```

**Note**: The scripts are not available at the moment. Rest assured, they will be released later on.

## Developing
To build the scripts:
```bash
npm install
bundle install
npm run build:script
npm run build:style
```

To run the docs locally:
```bash
# installation
cd docs
npm install

# running
npm run build:script
npm run build:style
npm run server
```

In case you'd like to watch for changes:
```bash
# on ./docs/ root
npm run watch:script
npm run watch:style
```

## License
Big thanks to our inspirations:
- [Primer](primercss.io)
- [Bootstrap](getbootstrap.com)
- [Rico Sta. Cruz](rscss.io)

**aia** should never be used outside of officially endorsed ONE products or without explicit permission.
