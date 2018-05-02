function board(row,col) {
  var array = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < row; i++) {
    var tampung = [];
    for (var j = 0; j < col; j++) {
      tampung.push(alphabet[Math.floor(Math.random()*(alphabet.length-1))]);
    }
    array.push(tampung);
  }
  var counter = 0;
  for (var k = 0; k < array.length-1; k++) {
    for (var l = 0; l < array[k].length-1; l++) {
      var temp = [];
      temp.push(array[k][l]);
      temp.push(array[k][l+1]);
      temp.push(array[k+1][l]);
      temp.push(array[k+1][l+1]);
      var vowels = checkAllVowels(temp);
      if (vowels==true) {
        counter++;
      }
    }
  }
  return counter;
}
// console
console.log(board(5,4));

function checkAllVowels(string) {
  var vocal = 'aiueo';
  for (var i = 0; i < string.length; i++) {
    var status = false;
    for (var j = 0; j < vocal.length; j++) {
      if (string[i].toLowerCase()==vocal[j]) {
        status = true;
      }
    }
    if(status==false){
      return status;
    }
  }
  return true;
}
