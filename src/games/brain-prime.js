import doGameSession from '../index.js';
import getRandomNumber from '../utils.js';

const countDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length;
};

const getQuestionAndAnswer = () => {
  const minValue = 1;
  const maxValue = 100;
  const num = getRandomNumber(minValue, maxValue);
  const question = num;
  const correctAnswer = countDivisors(num) === 2 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isPrimeNum = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  doGameSession(getQuestionAndAnswer, rule);
};

export default isPrimeNum;
