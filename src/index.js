import * as food from './food';
//tree-shaking with rollup-plugin-node-resolve

const roll = () => `${food.roll()}`;

const rollThree = () => `${food.rollThree()}`;

export { roll, rollThree };
