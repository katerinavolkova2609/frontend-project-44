import gameSession from '../index.js';
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
  const num = getRandomNumber(1, 100);
  const question = num;
  const correctAnswer = countDivisors(num) === 2 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const isPrimeNum = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameSession(getQuestionAndAnswer, rules);
};

export default isPrimeNum;
