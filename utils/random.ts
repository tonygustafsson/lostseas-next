// TODO: Use Crypto.randomInt instead
export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min
