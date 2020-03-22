# Random Fruity Strings 🎲

this repo contains a simple javascript library that **generates some random fruity strings** and it could be used in both browser and nodejs enviroments.

### Installation

_install via node_ :

```bash
$ npm i random-fruits

# Or if you use Yarn
$ yarn add random-fruits
```

You can also use this library on the browser directly:

```html
<!-- For development -->
<script src="https://unpkg.com/random-fruits/dist/random-fruits.umd.js"></script>

<!-- Minified version for production -->
<script src="https://unpkg.com/random-fruits/dist/random-fruits.umd.min.js"></script>
```

## Quick Start

On Node.js:

```js
const randomFruits = require('random-fruits');

randomFruits.roll(); // "🍉"

randomFruits.rollThree(); // "🍇,🍍,🍋"
```

If you load the `umd` bundle on the browser, you can access the `randomFruit` function globally :

```js
window.randomFruit.roll(); // "🍏"

// Or simply
randomFruit.roll();

randomFruit.rollThree();
```

you can use `import` syntax either :

```js
import { roll, rollThree } from 'random-fruits';

roll(); // 🍍

rollThree(); // 🥭,🍓,🍌
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
