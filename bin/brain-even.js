#!/usr/bin/env node
import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log("Hello, " + name + "!");
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const checkingEvenNumber = () => {
  for (let i = 0; i <= 2; i += 1) {
    let randomNum = Math.floor(Math.random() * 100);
    console.log("Question: " + randomNum);
    const answer = readlineSync.question("Your answer: ");
    const evenNum = randomNum % 2 === 0;
    const oddNum = randomNum % 2 === 1;
    const wrongAnswer = evenNum ? "yes" : "no";
    if ((evenNum && answer === "yes") || (oddNum && answer === "no")) {
      console.log("Correct!");
    } else
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${wrongAnswer}'.\nLet's try again, ${name}!`
      );
  }
  return console.log(`Congratulations, ${name}!`);
};
checkingEvenNumber();
