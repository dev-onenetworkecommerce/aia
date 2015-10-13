## aia [![npm version](http://img.shields.io/npm/v/aia.svg?style=flat-square)](https://npmjs.org/package/aia?style=flat-square) [![Build Status](https://img.shields.io/travis/dev-onenetworkecommerce/aia.svg?style=flat-square)](https://travis-ci.org/dev-onenetworkecommerce/aia?branch=master)
```
npm install aia --save
```
The UI Kit that powers ONE's internal projects built on [ReactJS](reactjs.org) and [Sass](sass-lang.com).

Check the [docs](https://rawgit.com/dev-onenetworkecommerce/aia/master/docs/index.html#/scaffolding?_k=wflhj2).

## Usage
If you're using sass, you can simply import the `scss` file.
```sass
@import "path/to/aia/styles/main.scss";
```

Otherwise, you can get the CSS file directly.
```html
<link href="path/to/aia/dist/aia.css" rel="stylesheet">
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
Big thanks to our main contributors:
- [Jef Mari (jefmari)](https://github.com/jefmari)
- [Justin Lazaro (juztinlazaro)](https://github.com/juztinlazaro)
- [Jess Vista (jessvista)](https://github.com/jessvista)
- [Brian Bodollo (maebe22)](https://github.com/maebe22)
- [Kier Borromeo (srph)](https://github.com/srph)
- [Fleener Lemon Dela Cruz `DESIGNER`](https://www.behance.net/fleenerlemon)

Special thanks to our inspirations:
- [Primer](http://primercss.io)
- [Bootstrap](http://getbootstrap.com)
- [Rico Sta. Cruz](http://rscss.io)

Lastly, thanks to [JC Ricaro](https://github.com/JcRicaro) for coining the project name.

**aia** should never be used outside of officially endorsed ONE products or without explicit permission.
