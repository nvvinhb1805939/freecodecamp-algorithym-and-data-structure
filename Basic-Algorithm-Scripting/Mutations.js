// Mutations

function mutation(arr) {
  let [firstElement, secondElement] = arr;
  firstElement = firstElement.toLowerCase();
  secondElement = secondElement.toLowerCase();

  for (let index = 0; index < secondElement.length; index++) {
    if (!firstElement.includes(secondElement[index])) return false;
  }
  return true;
}

console.log(mutation(['hello', 'hey']));
