import { gameSession } from "../index.js";

const findMissedNum = () => {
  const rules = () => console.log("What number is missing in the progression?");

  const getCollOfNumbers = () => {
    const collOfNumbers = [];

    for (let i = 0; i <= 2; i += 1) {
      const progression = [];
      let num = Math.floor(Math.random() * (10 - 1) + 1);
      let diffBetweemNumbers = Math.floor(Math.random() * (10 - 2) + 2);
      for (let j = 0; j < 10; j += 1) {
        progression.push(num);
        num += diffBetweemNumbers;
      }
      let hiddenNum = Math.floor(Math.random() * (10 - 1) + 1);
      let correctAnswer = progression[hiddenNum].toString();
      progression[hiddenNum] = "..";
      let question = progression.join(" ");
      collOfNumbers[i] = [];
      collOfNumbers[i].push(question, correctAnswer);
    }
    return collOfNumbers;
  };

  let collOfNumbers = getCollOfNumbers();
  gameSession(rules, collOfNumbers);
};

export { findMissedNum };
