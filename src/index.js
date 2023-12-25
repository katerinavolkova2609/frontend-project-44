import readlineSync from "readline-sync";

const getUserName = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name + "!");
  return name;
};

const gameSession = (rules, collOfNumbers) => {
  let name = getUserName();
  rules();
  for (let i = 0; i <= 2; i += 1) {
    console.log("Question: " + collOfNumbers[i][0]);
    const answer = readlineSync.question("Your answer: ");
    if (collOfNumbers[i][1] === answer) {
      console.log("Correct!");
    } else
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${collOfNumbers[i][1]}'.\nLet's try again, ${name}!`
      );
  }
  return console.log(`Congratulations, ${name}!`);
};

export { gameSession };
