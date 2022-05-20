// Factorialize a Number

function factorialize(num) {
  let factorial = 1;
  for (let index = 2; index <= num; index++) {
    factorial *= index;
  }
  return factorial;
}

console.log(factorialize(5));
