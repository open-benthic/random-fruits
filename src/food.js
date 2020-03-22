// import random from 'lodash-es/random';
/** cant use this approach on CommonJs Libraries  **/

import random from 'lodash/random';

const FRUITS = [
  'AP🍏PLE',
  'WATER🍉MELON',
  'GRA🍇PE',
  'BANA🍌NA',
  'MA🥭NGO',
  'PIN🍍EAPPLE',
  'STRAWBE🍓RRY',
  'LEMO🍋N',
  'CHER🍒RIES',
  'PE🍑ACH',
  'ORA🍊NGE',
  'KI🥝WI'
];

const FAST_FOODS = ['BU🍔RGER', 'FRI🍟ES', 'PIZ🍕ZA', 'HOT🌭DOG'];

const getRandomFor = passedArray => () =>
  passedArray[random(0, passedArray.length - 1)];

const roll = getRandomFor(FRUITS);

// const randomFruit = () => getRandomForFruits();

const rollThree = () => [roll(), roll(), roll()];

const randomFastFood = () => FAST_FOODS[random(0, FRUITS.length - 1)];

export { roll, rollThree, randomFastFood };
