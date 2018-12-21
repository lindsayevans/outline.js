# remove-focus-outline

> Formerly known as outline.js

## What does it do?
Automatically remove CSS outlines in an accessible manner.

Based on Steve Faulkner's article [how to remove CSS outlines in an accessible manner?](http://www.paciellogroup.com/blog/2012/04/how-to-remove-css-outlines-in-an-accessible-manner/)

## ⚠️ Warning ⚠️
**This branch is for the next version (v2) of remove-focus-outline and may not work 100% as intended.**

The [v2 project page](https://github.com/lindsayevans/outline.js/projects/1) shows progress towards the public release.

## Installation

```sh
npm install remove-focus-outline@next
```

## Usage

Just include the library and everything will run by itself.

As an ES Module (TypeScript, ES6, etc.)
```js
import 'remove-focus-outline';
```

As a CommonJS module (Browserify, RequireJS etc.)
```js
require('remove-focus-outline');
```

A UMD build is also available from the unpkg CDN if including a `<script>` is your only option
```html
<script src="https://unpkg.com/remove-focus-outline@next/lib/remove-focus-outline.umd.js"></script>
```

The [`examples`](examples) directory has more advanced usage examples; including using with Bootstrap, customising event handlers & CSS, and more.

## How does it do it?

An oversimplified explanation: it adds CSS to remove focus outlines (`:focus{outline:0}`) when the user interacts with a mouse, then removes the CSS when the user interacts using the keyboard.

## Browser support

As defined in [`.browserslistrc`](./.browserslistrc):
```
> 1%
IE >=8
```

Which as of October 2018 is:
```
and_chr 69
and_uc 11.8
chrome 68
chrome 67
edge 17
firefox 61
ie 11
ie 10
ie 9
ie 8
ios_saf 11.3-11.4
ios_saf 11.0-11.2
op_mini all
safari 11.1
```

## Contributing

Take a look at [CONTRIBUTING.md](CONTRIBUTING.md)
