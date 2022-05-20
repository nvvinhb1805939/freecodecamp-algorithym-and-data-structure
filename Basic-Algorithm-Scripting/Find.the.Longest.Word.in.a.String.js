// Find the Longest Word in a String

function findLongestWordLength(str) {
  const words = str.split(' ');
  const longestWordLength = words.reduce((accumulator, word) => {
    return word.length > accumulator ? word.length : accumulator;
  }, 0);
  return longestWordLength;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));
