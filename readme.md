# postcss-attribute-selector-prefix <a href="https://github.com/postcss/postcss"><img align="left" height="49" title="PostCSS" src="http://postcss.github.io/postcss/logo.svg"></a>
> [PostCSS](https://github.com/postcss/postcss) plugin adds a namespace/prefix to attribute selector.

[![Travis Build Status](https://img.shields.io/travis/GitScrum/postcss-attribute-selector-prefix.svg?style=flat-square&label=unix)](https://travis-ci.org/GitScrum/postcss-attribute-selector-prefix)

[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/postcss-attribute-selector-prefix.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/GitScrum/postcss-attribute-selector-prefix)

[![testen badge](https://img.shields.io/badge/testen-passing-brightgreen.svg?style=flat-square)][testen repo]

[![node](https://img.shields.io/node/v/postcss-attribute-selector-prefix.svg?maxAge=2592000&style=flat-square)]()

[![npm version](https://img.shields.io/npm/v/postcss-attribute-selector-prefix.svg?style=flat-square)](https://www.npmjs.com/package/postcss-attribute-selector-prefix)

[![Dependency Status](https://david-dm.org/gitscrum/postcss-attribute-selector-prefix.svg?style=flat-square)](https://david-dm.org/gitscrum/postcss-attribute-selector-prefix)

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)

[![Coveralls status](https://img.shields.io/coveralls/GitScrum/postcss-attribute-selector-prefix.svg?style=flat-square)](https://coveralls.io/r/GitScrum/postcss-attribute-selector-prefix)

[![npm downloads](https://img.shields.io/npm/dm/postcss-attribute-selector-prefix.svg?style=flat-square)](https://www.npmjs.com/package/postcss-attribute-selector-prefix)

[![npm](https://img.shields.io/npm/dt/postcss-attribute-selector-prefix.svg?style=flat-square)](https://www.npmjs.com/package/postcss-attribute-selector-prefix)

## Why ?
Needs to escape from the third-party frameworks.

## Install

```bash
$ npm install postcss-at-rules-variables
```

> **Note:** This project is compatible with node v4+

## Usage

```js
// dependencies
var fs = require('fs');
var postcss = require('postcss');
var attrSelectorPrefix = require('postcss-attribute-selector-prefix');

// css to be processed
var css = fs.readFileSync('css/input.css', 'utf8');

// process css
var output = postcss()
    .use(attrSelectorPrefix({prefix: 'test-'}))
    .process(css)
    .css;

console.log(output);
```

## Example

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

## Options

#### `prefix`

Type: `string`  
Default: ``  
Description: *add prefix to attribute selector*

#### `filter`

Type: `Array`  
Default: `[]`  
Description: *attribute selector to which we must add the prefix*  
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


Type: `Array`  
Default: `[]`  
Description: *ignored attribute selector*  
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

## LICENSE

> MIT License (MIT)

>Copyright (c) Ivan Demidov <scrum@list.ru>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
