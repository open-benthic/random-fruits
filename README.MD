# random fruits

this repo contains a small & simple javascript library that **generates random string from a list of fruits** and it is compatible with browser and nodejs enviroments ( CommonJS , ES , UMD )

### Installation

_install via_ :

```bash
$ npm i random-eat-fruits

# Or if you use Yarn
$ yarn add random-eat-fruits
```

You can also use this library on the browser directly:

```html
<!-- For development -->
<script src="https://unpkg.com/random-eat-fruits@0.0.1/dist/eat-fruit.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/random-eat-fruits@0.0.1/dist/eat-fruit.umd.min.js"></script>
```

_supported enviroments_ :

```
last 2 version
> 5%
not dead
maintained node versions
```

## Quick Start

On Node.js:

```js
const eatFruit = require('eat-fruit');

eatFruit(); // "I eat 🍉.(or whatever randomly generated fruit)"
```

If you load the `umd` bundle on the browser, you can access the `eatFruit` function globally :

```js
window.eatFruit(); // "I eat 🍉."

// Or simply
eatFruit();
```

you can use `import` either :

```js
import makeRandomFruits from 'random-eat-fruits';

console.log(makeRandomFruits());
```

### Tech stack

- [rollup](https://rollupjs.org)
- [babel](https://babeljs.io/)
- [lodash](https://lodash.com/)
- [terser-plugin](https://www.npmjs.com/package/rollup-plugin-terser)

### Notes

> uses rollup for ES Modules bundling and babel for coverting es2015+ code to es5.

> also uses node-resolve plugin to compile **cjs** code to **es module** compatible ones for **tree-shaking** purposes done automatically by rollup.

> lodash can be used as peer dependency.

### Helpful Links

[wesbos - javascript modules](https://wesbos.com/javascript-modules/)
[bundling your javascript library with rollup](https://risanb.com/posts/bundling-your-javascript-library-with-rollup/)

### License

_developed and maintained under MIT license © [Benthic](https://github.com/open-benthic)_
