// Reverse a String

function reverseString(str) {
  const arr = [];
  for (const value of str) {
    arr.unshift(value);
  }
  return arr.join('');
}

console.log(reverseString('hello'));
