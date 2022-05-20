// Finders Keepers

function findElement(arr, func) {
  for (const element of arr) {
    if (func(element)) return element;
  }
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
