import { gameSession } from "../index.js";
import { getRandomNumber } from "../utils.js";

const calculator = () => {
  const rules = () => console.log("What is the result of the expression?");

  const getCollOfNumbers = () => {
    let collOfNumbers = [];
    for (let i = 0; i <= 2; i += 1) {
      let num1 = getRandomNumber(1, 20);
      let num2 = getRandomNumber(1, 20);

      const operators = ["+", "-", "*"];
      let operator = operators[Math.floor(Math.random() * 3)];
      let question = num1 + " " + operator + " " + num2;

      let correctAnswer;
      switch (operator) {
        case "+":
          correctAnswer = num1 + num2;
          break;
        case "-":
          correctAnswer = num1 - num2;
          break;
        case "*":
          correctAnswer = num1 * num2;
          break;
      }
      collOfNumbers[i] = [];
      collOfNumbers[i].push(question, correctAnswer.toString());
    }
    return collOfNumbers;
  };

  let collOfNumbers = getCollOfNumbers();
  gameSession(rules, collOfNumbers);
};


export { calculator };
