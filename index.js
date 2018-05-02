function generateBoard(row, col) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = [];

  for (let i = 0; i < row; i++) {
    let rows = [];

    for (let j = 0; j < col; j++) {
      var randomChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      rows.push(randomChar);
      //rows.push('A');
    }
    output.push(rows)
  }
  return output;
}

console.log(generateBoard(5,4));

function checkVowels(str) {
  var char = str.toLowerCase();

  if (char === 'a' || char === 'e' || char === 'i' ||
      char === 'o' || char === 'u') {
    return true;
  }
  return false;
}

function checkVowelsArray(arr) {
  let count = 0;

  // check array index i
  for (let index = 0; index < arr.length - 1; index++) {
    var nextIndex = index + 1;
    for (let j = 0; j < arr[index].length - 1; j++) {
      // if (checkVowels(arr[index][j]) === true && checkVowels(arr[index][j+1]) === true) {
      //   // check array after -> arr[i+1]
      //   if (checkVowels(arr[nextIndex][j]) === true && checkVowels(arr[nextIndex][j+1]) === true) {
      //
      //   }
      // }
      if (
        checkVowels(arr[index][j]) &&
        checkVowels(arr[index][j+1]) &&
        checkVowels(arr[nextIndex][j]) &&
        checkVowels(arr[nextIndex][j+1])
      ) {
        count++;
      }
    }
  }

  return count;
}

console.log(checkVowelsArray(generateBoard(5,4)))

// Test case with all index are vowels
var vowel = [ ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O'],
              ['A', 'E', 'I', 'U', 'O']
            ]
console.log(checkVowelsArray(vowel));

// Test Case dari soal
var board = [ ['A', 'X', 'C', 'Y'],
              ['E', 'O', 'O', 'S'],
              ['I', 'U', 'I', 'N'],
              ['M', 'Y', 'O', 'E'],
              ['P', 'D', 'A', 'I']
            ]
console.log(checkVowelsArray(board));
