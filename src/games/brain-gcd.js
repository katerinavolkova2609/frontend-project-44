import doGameSession from '../index.js';
import getRandomNumber from '../utils.js';

const findGreatestDiv = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  for (let i = max; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
};

const getQuestionAndAnswer = () => {
  const minValue = 1;
  const maxValue = 100;
  const num1 = getRandomNumber(minValue, maxValue);
  const num2 = getRandomNumber(minValue, maxValue);
  const question = `${num1} ${num2}`;
  const result = findGreatestDiv(num1, num2).toString();
  return [question, result];
};

const findCommonDivisor = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  doGameSession(getQuestionAndAnswer, rule);
};

export default findCommonDivisor;
