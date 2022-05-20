// Where do I Belong

function getIndexToIns(arr, num) {
  const cloneOfArr = [...arr];
  cloneOfArr.sort((a, b) => a - b);
  for (const index in cloneOfArr) {
    if (num <= cloneOfArr[index]) {
      return parseInt(index);
    }
  }
  return cloneOfArr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
