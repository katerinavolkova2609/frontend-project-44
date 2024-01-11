import gameSession from '../index.js';
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
  const num = getRandomNumber(1, 10);
  const diffBetweemNumbers = getRandomNumber(2, 10);
  const hiddenNum = getRandomNumber(0, 9);
  const progression = getProgression(num, diffBetweemNumbers);
  const correctAnswer = progression[hiddenNum].toString();
  progression[hiddenNum] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const findMissedNum = () => {
  const rules = 'What number is missing in the progression?';
  gameSession(getQuestionAndAnswer, rules);
};

export default findMissedNum;
