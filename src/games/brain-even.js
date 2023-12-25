import { gameSession } from "../index.js";

const isEvenNumber = () => {
  const rules = () =>
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getCollOfNumbers = () => {
    let collOfNumbers = [];
    for (let i = 0; i <= 2; i += 1) {
      let randomNum = Math.floor(Math.random() * 100);
      let evenNum = randomNum % 2 === 0;
      let correctAnswer = evenNum ? "yes" : "no";
      collOfNumbers[i] = [];
      collOfNumbers[i].push(randomNum, correctAnswer);
    }
    return collOfNumbers;
  };

  let collOfNumbers = getCollOfNumbers();
  gameSession(rules, collOfNumbers);
};

export { isEvenNumber };
