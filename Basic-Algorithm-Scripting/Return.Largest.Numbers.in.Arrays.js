// Return Largest Numbers in Arrays

const largestNumberOfArray = arr =>
  arr.reduce((accumulator, item) => (item > accumulator ? item : accumulator), arr[0]);

const largestOfArrays = arr =>
  arr.reduce((accumulator, item) => {
    const largestNumber = largestNumberOfArray(item);
    return [...accumulator, largestNumber];
  }, []);

console.log(
  largestOfArrays([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
