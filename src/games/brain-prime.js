import { gameSession } from "../index.js";

const isPrimeNum = () => {
const rules = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const getCollOfNumbers = () => {
  const collOfNumbers = [];
  for (let i = 0; i <= 2; i += 1) {
    const divisors = [];
    let num = Math.floor(Math.random() * (100 - 1) + 1);
    for (let j = 1; j <= 100; j += 1) {
      if (num % j === 0) {
        divisors.push(j);
      }
    }
    let question = num;
    let correctAnswer = divisors.length === 2 ? "yes" : "no";
    collOfNumbers[i] = [];
    collOfNumbers[i].push(question, correctAnswer);
  }
  return collOfNumbers;
};
let collOfNumbers = getCollOfNumbers();
gameSession(rules, collOfNumbers);
};

export { isPrimeNum };
