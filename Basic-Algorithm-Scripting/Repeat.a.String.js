// Repeat a String

function repeatStringNumTimes(str, num) {
  let repeatedString = str;
  if (num <= 0) return '';
  if (num == 1) return repeatedString;
  return repeatedString + repeatStringNumTimes(str, num - 1);
}

console.log(repeatStringNumTimes('abc', 3));
