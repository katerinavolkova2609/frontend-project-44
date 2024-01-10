import readlineSync from "readline-sync";

const gameSession = (rules, collOfNumbers) => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name + "!");
  console.log(rules);
  for (let i = 0; i <= 2; i += 1) {
    const [question, correctAnswer] = collOfNumbers[i];
    console.log("Question: " + question);
    const answer = readlineSync.question("Your answer: ");
    if (correctAnswer === answer) {
      console.log("Correct!");
    } else
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
  }
  return console.log(`Congratulations, ${name}!`);
};

export { gameSession };
