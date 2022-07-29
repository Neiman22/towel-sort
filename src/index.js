
module.exports = function towelSort (matrix) {
  let mass = [];
  for (let i = 0; i < matrix.length; i++){
      if (i % 2 === 0) {
          for (let n = 0; n < matrix[i].length; n++) {
            mass.push(matrix[i][n]);
          }
      } else {
          for (let n = matrix[i].length - 1; n >= 0; n--) {
            mass.push(matrix[i][n])
          }
      }
  }
  return mass;
}
