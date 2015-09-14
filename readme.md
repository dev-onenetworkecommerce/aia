## aia
```
npm install aia --save
```
The UI Kit that powers ONE's internal projects built on [ReactJS](reactjs.org) and [Sass](sass-lang.com). [Check the documentation](dev-onenetworkecommerce.github.io/june).

## Usage
If you're using sass, you can simply import the `scss` file.
```
@import "path/to/aia/main.scss";
```

Otherwise, you can get the CSS file directly.
```
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
- PrimerCSS
- Bootstrap
- Rico Sta. Cruz
- JC Ricaro

**aia** should never be used outside of officially endorsed ONE products or without explicit permission.
