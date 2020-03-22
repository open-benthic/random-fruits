import * as food from './food';
//tree-shaking with rollup-plugin-node-resolve

const roll = () => console.log(`${food.roll()}`);

const rollThree = () => console.log(`${food.rollThree()}`);

export { roll, rollThree };
