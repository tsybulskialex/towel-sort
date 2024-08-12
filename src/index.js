
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) === false) {
    return [];
  }
  if (matrix.length === 0) {
    return [];
  }
  let final = []
  matrix.forEach((item, i) => {
      if (i % 2 !== 0) {
        final.push(item.sort((a,b) => b - a));
      } else {
        final.push(item);
      }
  });
  final = final.join(',').split(',');
  let result = [];
  for (let i of final) {
    result.push(Number(i));
  }
  return result;
}
