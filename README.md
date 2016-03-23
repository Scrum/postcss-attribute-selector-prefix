# postcss-attribute-selector-prefix plugin for postcss
[![Build Status](https://img.shields.io/travis/GitScrum/postcss-attribute-selector-prefix.svg?style=flat-square)](https://travis-ci.org/GitScrum/postcss-attribute-selector-prefix)[![npm version](https://img.shields.io/npm/v/postcss-attribute-selector-prefix.svg?style=flat-square)](https://www.npmjs.com/package/postcss-attribute-selector-prefix)[![Dependency Status](https://david-dm.org/gitscrum/postcss-attribute-selector-prefix.svg?style=flat-square)](https://david-dm.org/gitscrum/postcss-attribute-selector-prefix)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/GitScrum/postcss-attribute-selector-prefix.svg?style=flat-square)](https://coveralls.io/r/GitScrum/postcss-attribute-selector-prefix)

[![npm downloads](https://img.shields.io/npm/dm/postcss-attribute-selector-prefix.svg?style=flat-square)](https://www.npmjs.com/package/postcss-attribute-selector-prefix)[![npm](https://img.shields.io/npm/dt/postcss-attribute-selector-prefix.svg?style=flat-square)](https://www.npmjs.com/package/postcss-attribute-selector-prefix)

```css
/* input.css */
.class, 
[type="text"], 
[class*="lorem"] { 
	color:red; 
}
```

```css
/* Output example */
.class, 
[type="text"], 
[class*="test-lorem"] { 
	color:red; 
}
```

## Installation

```console
$ npm install postcss-attribute-selector-prefix
```

## Usage
Use postcss-attribute-selector-prefix before you at-rules plugin

```js
// dependencies
var fs = require("fs");
var postcss = require("postcss");
var attrSelector = require("postcss-attribute-selector-prefix");

// css to be processed
var css = fs.readFileSync("css/input.css", "utf8");

// process css
var output = postcss()
  .use(attrSelector({ prefix: 'test-' }))
  .css;

console.log(output);
```

### Options

#### `prefix`

Type: `string`  
Default: ``

#### `filter`
*attribute selector to which we must add the prefix*

Type: `Array`  
Default: `[]`  
Example: `['class', 'id']`

```css
/* input.css */
.class, 
[type="text"], 
[class*="lorem"],
[id^="myID"] { 
	color: red; 
}
```

```css
/* Output example */
.class, 
[type="text"], 
[class*="test-lorem"],
[id^="test-myID"] { 
	color: red; 
}
```

#### `ignore`
*ignored attribute selector*

Type: `Array`  
Default: `[]`  
Example: `['type', 'alt']`

```css
/* input.css */
.class, 
[type="text"], 
[alt*="ALT"],
[class*="class"] { 
	color: red; 
}
```

```css
/* Output example */
.class, 
[type="text"], 
[alt*="ALT"],
[class*="test-class"] { 
	color: red; 
}
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.
