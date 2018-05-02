function createNestedArray(jumlahRow, jumlahCol) {
  var array = []
  for (var i = 0; i < jumlahRow; i++) {
    var nestedArray = []
    for (var j = 0; j < jumlahCol; j++) {
      var random = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      nestedArray.push(random)

    }
    array.push(nestedArray)

  }
  return array
}
// console.log(createNestedArray(3, 5))

function checkVowels(dataVowels) {
  var vowels = ['a', 'i', 'u', 'e', 'o']
  var lowerCaseData = dataVowels.toLowerCase()
  var splitLowerCase =lowerCaseData.split('')
  var counter = 0
  for (var i = 0; i < splitLowerCase.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (vowels[j] === splitLowerCase[i]) {
        counter++
      }
    }
  }
  if (counter === splitLowerCase.length) {
    return true;
  } else {
    return false;
  }
}

function generateBoard(board) {
  var count = 0
  for (var i = 0; i < board.length - 1; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var pair = board[i][j] + board[i][j + 1] + board[i + 1][j] + board[i + 1][j + 1]
      if (checkVowels(pair) == true) {
        count++
      }
    }

  }
  return count;
}

var board = createNestedArray(20, 20)
generateBoard(board)
console.log(generateBoard(board));
