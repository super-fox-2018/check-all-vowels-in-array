function getBlock(rows,columns) {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
  const board = [];

  for (let i = 0; i < rows; i++) {
    for ( let j = 0; j < columns;  j++) {

      let number = Math.floor(Math.random() * dictionary.length);
      let letter = dictionary[number];

      if (board[j] === undefined) {
        board[j] = [];
      }
      board[j].push(letter);
    }
  }
  return board
}

function vowelsInArray (array) {
  const vowels = 'aeiou'.toUpperCase();
  let counter = 0;
  for (let i = 0; i < array.length-1; i++){
    for (let j = 0; j < array[i].length-1; j++) {

      let topLeftIsCorrect = vowels.indexOf(array[i][j]) !== -1
      let topRightIsCorrect = vowels.indexOf(array[i][j+1]) !== -1
      let bottomLeftIsCorrect = vowels.indexOf(array[i+1][j]) !== -1
      let bottomRightIsCorrect = vowels.indexOf(array[i+1][j+1]) !== -1

      if ( topLeftIsCorrect && topRightIsCorrect &&
        bottomLeftIsCorrect && bottomRightIsCorrect ) {
        counter++
      }
    }
  }
  return counter;
}

const randomArr = [
    ["A","A","J","K"],
    ["O", "E", "M", "X"],
    ["D","L","U","P"],
    ["E","C","B","V"],
    ]

let board = getBlock(5,3)
let output = vowelsInArray(board)

//Test Cases
console.log(output);
console.log(vowelsInArray(randomArr))
