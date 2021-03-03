import { aString as theString, bString } from './a';
import * as strings from './a';

console.log(strings.aString);

import { reverse, isOdd } from './utils';

console.log(reverse('test'), isOdd(1))


// import test = require('./a');
// console.log(test);

if (Math.random() >= 0.5) {
  import('./a').then(a => console.log('The message is', a.aString))
}

import * as config from './config.json';
console.log(config.userSetting1);