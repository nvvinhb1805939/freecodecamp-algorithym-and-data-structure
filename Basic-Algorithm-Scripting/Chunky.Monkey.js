// Chunky Monkey

function chunkArrayInGroups(arr, size) {
  const result = [];
  const subResultArrayNumber = Math.ceil(arr.length / size);

  for (let index = 0; index < subResultArrayNumber; index++) {
    const subResultArray = arr.slice(index * size, size + index * size);
    result.push(subResultArray);
  }

  return result;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));
