function generateTable(row, col) {
  let alphabet = 'aeioubcdf';
  let array = [];
  for (let i = 0; i < row; i++) {
    array.push([]);
    for (let j = 0; j < col; j++) {
      array[i].push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
  }
  return array;
}

function checkVowels(array) {
  let vowelCounter = 0;
  let vowelBox = 0;
  let vowel = 'aeiou';
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[i].length - 1; j++) {
      for (let k = 0; k < vowel.length; k++) {
        if (array[i][j] === vowel[k]) {
          vowelCounter = 0;
          for (let l = 0; l < vowel.length; l++) {
            if (array[i][j + 1] === vowel[l]) {
              vowelCounter++;
            }
            if (array[i + 1][j + 1] === vowel[l]) {
              vowelCounter++;
            }
            if (array[i + 1][j] === vowel[l]) {
              vowelCounter++;
            }
          }
          if (vowelCounter === 3) {vowelBox++;}
        }
      }
    }
  }
  return vowelBox;
}

console.log(checkVowels(generateTable(5, 4)));
