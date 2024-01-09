const getRandomNumber = (min, max) => {
  let num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
};
export { getRandomNumber };
