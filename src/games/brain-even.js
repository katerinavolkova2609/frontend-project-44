import doGameSession from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const getQuestionAndAnswer = () => {
  const minValue = 1;
  const maxValue = 100;
  const randomNum = getRandomNumber(minValue, maxValue);
  const result = isEven(randomNum) ? 'yes' : 'no';
  return [`${randomNum}`, result];
};

const isEvenNum = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  doGameSession(getQuestionAndAnswer, rule);
};

export default isEvenNum;
