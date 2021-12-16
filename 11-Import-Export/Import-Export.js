const input1 = require('./Export-Js-1');
const input2 = require('./Export-Js-2');

const fight = (input1, input2) => {
  if (input1.strength > input2.strength) {
    return input1.growl();
  }
  if (input2.strength > input1.strength) {
    return input2.howl();
  }
  return 'Two input have a same length';
};

const myinput1 = new input1();
const myinput2 = new input2();
const result = fight(myinput1, myinput2);

module.exports = {fight, myinput1, myinput2, result};
