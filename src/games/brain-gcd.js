import gameSession from '../index.js';
import getRandomNumber from '../utils.js';

const findGreatestDiv = (num1, num2) => {
  const commonDivisors = [];
  for (let i = 1; i <= 100; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      commonDivisors.push(i);
    }
  }
  return commonDivisors[commonDivisors.length - 1];
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const result = findGreatestDiv(num1, num2).toString();
  return [question, result];
};

const findCommonDivisor = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  gameSession(getQuestionAndAnswer, rules);
};

export default findCommonDivisor;
