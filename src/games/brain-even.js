import gameSession from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getQuestionAndAnswer= () => {
  const randomNum = getRandomNumber(1, 100);
  const result = isEven(randomNum) ? 'yes' : 'no';
  return [`${randomNum}`, result];
};

const isEvenNum = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameSession(getQuestionAndAnswer, rules);
};

export default isEvenNum;
