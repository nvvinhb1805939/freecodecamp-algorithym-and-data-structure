// Slice and Splice

function frankenSplice(arr1, arr2, n) {
  const copyOfArr2 = [...arr2];
  copyOfArr2.splice(n, 0, ...arr1);
  return copyOfArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
