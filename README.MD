# Random Fruity Strings 🎲


this repo contains a simple javascript library that **generates some random fruity strings** and it could be used in both browser and nodejs enviroments.

### Installation

_install via node_ :

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





## Quick Start

On Node.js:

```js
const eatFruit = require('eat-fruit');

eatFruit(); // "🍉"  (or any random fruit)
```

If you load the `umd` bundle on the browser, you can access the `eatFruit` function globally :

```js
window.eatFruit(); // "🍏"

// Or simply
eatFruit();
```

you can use `import` either :

```js
import makeRandomStringWithFruits from 'random-eat-fruits';

console.log(makeRandomStringWithFruits()); // 🍍
```

### Tech stack

- [rollup](https://rollupjs.org)
- [babel](https://babeljs.io/)
- [lodash](https://lodash.com/)
- [terser-plugin](https://www.npmjs.com/package/rollup-plugin-terser)

### Notes


_supported enviroments_ :

```
last 2 version
> 5%
not dead
maintained node versions
```

> uses rollup for ES Modules bundling and babel for coverting es2015+ code to es5.

> also uses node-resolve plugin to compile **cjs** code to **es module** compatible ones for **tree-shaking** purposes done automatically by rollup.

> lodash can be used as peer dependency.

### Contributing

contributers welcomed here! 😀🙌
you can easily fork this project , add your changes and create pull request .

### Roadmap

- typescript typeDefinitions 
- tests
- fruits slot machine
- dockerfiles
- optimize project bundle size
- styling and UI component for react
- create a blog post on [DEV.to](https://dev.to/) or [Medium](https://medium.com/)
- animations


### Helpful Links

[wesbos - javascript modules](https://wesbos.com/javascript-modules/)
[bundling your javascript library with rollup](https://risanb.com/posts/bundling-your-javascript-library-with-rollup/)

### License

_developed and maintained under MIT license © [Benthic](https://github.com/open-benthic)_
