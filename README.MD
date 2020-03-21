# simple javascript library

this repo contains a small & simple javascript library that compatible with browser and nodejs enviroments ( CommonJS , ES , UMD )

the project main functionality is to **generate random fruit** strings

_install via_ :

```
npm i random-eat-fruits
```

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

### tech stack :

- ##### [rollup](https://rollupjs.org)
- ##### [babel](https://babeljs.io/)
- ##### [terser-plugin](https://www.npmjs.com/package/rollup-plugin-terser)
- ##### [lodash](https://lodash.com/)

_developed and maintained under MIT license_
