import doGameSession from '../index.js';
import getRandomNumber from '../utils.js';

const calcValues = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unexpected sign: '${operator}'!`);
  }
};

const getQuestionAndAnswer = () => {
  const minValue = 1;
  const maxValue = 20;
  const num1 = getRandomNumber(minValue, maxValue);
  const num2 = getRandomNumber(minValue, maxValue);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const question = `${num1} ${operator} ${num2}`;
  const result = calcValues(num1, num2, operator).toString();
  return [question, result];
};

const doCalc = () => {
  const rule = 'What is the result of the expression?';
  doGameSession(getQuestionAndAnswer, rule);
};

export default doCalc;
