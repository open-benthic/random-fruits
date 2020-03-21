import * as food from './food';
//tree-shaking with rollup-plugin-node-resolve

const eatFruit = () => console.log(`${food.randomFruit()}.`);

export default eatFruit;
