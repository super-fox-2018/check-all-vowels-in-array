function generateNestedArr(numOfRows, numOfCols) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let arr = [];
  for (let i = 0; i < numOfRows; i += 1) {
    arr.push([]);
    for (let j = 0; j < numOfCols; j += 1) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      arr[i].push(letter);
    }
  }

  return arr;
}

function checkAllVowelsInArray(arr) {
  const vowels = 'AIUEO';
  let counter = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr[i].length - 1; j += 1) {
      if (vowels.indexOf(arr[i][j])>-1 && vowels.indexOf(arr[i][j+1])>-1 && vowels.indexOf(arr[i+1][j])>-1 && vowels.indexOf(arr[i+1][j+1])>-1) {
        counter += 1;
      }
    }
  }

  return counter;
}

const randomArr = [
  ['A', 'I', 'B', 'S', 'D'],
  ['U', 'E', 'C', 'T', 'Y'],
  ['O', 'A', 'T', 'B', 'J']
];

console.log(checkAllVowelsInArray(generateNestedArr(5,3)));
console.log(checkAllVowelsInArray(randomArr));


