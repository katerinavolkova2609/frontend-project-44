import doGameSession from '../index.js';
import goGameSession from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (num, diffBetweemNumbers) => {
  let number = num;
  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(number);
    number += diffBetweemNumbers;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const minValue = 2;
  const maxValue = 10;
  const num = getRandomNumber(minValue, maxValue);
  const diffBetweemNumbers = getRandomNumber(minValue, maxValue);
  const indexOfHiddenNum = getRandomNumber(0, 9);
  const progression = getProgression(num, diffBetweemNumbers);
  const correctAnswer = progression[indexOfHiddenNum].toString();
  progression[indexOfHiddenNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const findMissedNum = () => {
  const rule = 'What number is missing in the progression?';
  doGameSession(getQuestionAndAnswer, rule);
};

export default findMissedNum;
