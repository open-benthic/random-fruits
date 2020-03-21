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
  'STRAWBE🍓RRY'
];

const FAST_FOODS = ['BU🍔RGER', 'FRI🍟ES', 'PIZ🍕ZA', 'HOT🌭DOG'];

const randomFruit = () => FRUITS[random(0, FRUITS.length - 1)];

const randomFastFood = () => FAST_FOODS[random(0, FRUITS.length - 1)];

export { FRUITS, FAST_FOODS, randomFruit, randomFastFood };
