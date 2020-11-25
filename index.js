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

function check2x2(array) {
  let vowelBox = 0;
  let vowel = 'aeiou';
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[i].length - 1; j++) {
      let topLeft = array[i][j];
      let topRight = array[i][j + 1];
      let bottomLeft = array[i + 1][j];
      let bottomRight = array[i + 1][j + 1];
      let twoBytwo = topLeft + topRight + bottomLeft + bottomRight;
      console.log(twoBytwo);
      if (checkVowels(twoBytwo) === true) {
        vowelBox += 1;
      }
    }
  }
  return vowelBox;
}

function checkVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i].toLowerCase() === vowels[j].toLowerCase()) {
        counter += 1;
      }
    }
  }
  if (counter === str.length) {
    return true;
  } else {
    return false;
  }
}

console.log(check2x2(generateTable(5, 4)));
