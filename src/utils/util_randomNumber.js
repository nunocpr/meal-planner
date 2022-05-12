export function rando(min = 1, max = 10000, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}
