import { gameSession } from "../index.js";
import { getRandomNumber } from "../utils.js";

const findCommonDivisor = () => {
  const rules = () =>
    console.log("Find the greatest common divisor of given numbers.");

  const getCollOfNumbers = () => {
    const collOfNumbers = [];
    const commonDivisors = [];
    for (let i = 0; i <= 2; i += 1) {
      let num1 = getRandomNumber(1, 100);
      let num2 = getRandomNumber(1, 100);
      let question = num1 + " " + num2;
      for (let j = 1; j <= 100; j += 1) {
        let divisor;
        if (num1 % j === 0 && num2 % j === 0) {
          divisor = j;
          commonDivisors.push(divisor);
        }
      }
      let correctAnswer = commonDivisors[commonDivisors.length - 1].toString();
      collOfNumbers[i] = [];
      collOfNumbers[i].push(question, correctAnswer);
    }
    return collOfNumbers;
  };

  let collOfNumbers = getCollOfNumbers();
  gameSession(rules, collOfNumbers);
};

export { findCommonDivisor };
