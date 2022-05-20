// Truncate a String

function truncateString(str, num) {
  const stringEnding = num < str.length ? '...' : '';
  return str.slice(0, num) + stringEnding;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));
