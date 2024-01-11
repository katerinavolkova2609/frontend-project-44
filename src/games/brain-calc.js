import gameSession from '../index.js';
import getRandomNumber from '../utils.js';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * 3)];
  const question = `${num1} ${operator} ${num2}`;
  const result = calc(num1, num2, operator).toString();
  return [question, result];
};

const calculate = () => {
  const rules = 'What is the result of the expression?';
  gameSession(getQuestionAndAnswer, rules);
};

export default calculate;
