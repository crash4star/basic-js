module.exports = function countCats(matrix) {
  let arr = [];

  matrix.forEach(item => {
    item.forEach(cat => {
      if (cat === '^^') {
        arr.push(cat)
      }
    });
  });

  if (arr.length > 0) {
    return arr.length;
  } else {
    return 0;
  }
};