const matrix = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
];

const diagonal = (nestedArray) => {
  let diagonalArray1 = [];

  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
      if (diagonalArray1[j + i]) {
        diagonalArray1[j + i].push(nestedArray[i][j]);
      } else {
        diagonalArray1[j + i] = [];
        diagonalArray1[j + i].push(nestedArray[i][j]);
      }
    }
  }
  return diagonalArray1;
};

console.log(diagonal(matrix));