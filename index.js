function randomLetter(){
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var letter = letters[Math.floor(Math.random() * letters.length)];
  return letter;
}

function isVowel(str){
  var arr = ["a","i","u","e","o"];
  str = str.toLowerCase();
  str = str.split("");
  var count = 0;

  for(var i = 0; i < str.length; i++){
    for(var k = 0; k < arr.length; k++){
      if(str[i] === arr[k]){
        count++;
      }
    }
  }
  
  if(count === str.length){
    return true;
  }
  else{
    return false;
  }

}

function vowelCheck(maxRow, maxCol){
  var arr = [];

  for(var i = 0; i < maxRow; i++){
    arr.push([]);
  }
  for(var k = 0; k < maxRow; k++){
    for(var j = 0; j < maxCol; j++){
      arr[k].push(randomLetter());
    }
  }

  var str = "";
  var count = 0;
  for(var row = 0; row <= maxRow; row++){
    if(arr[row+1] !== undefined) {
      for(var col=0; col <= maxCol; col++){
        if(arr[row][col+1] !== undefined) {
          str += (arr[row][col]);
          str += (arr[row][col + 1]);
          str += arr[row+1][col];
          str += (arr[row + 1][col + 1]);
          if(isVowel(str)){
              count++;
            }
          str = "";
        }
      }
    }
  }

  return count;
}


// var arr = [["A","X","C","Y"],["E","O","O","S"],["I","U","I","N"],["M","Y","O","E"],["P","D","A","I"]]
console.log(vowelCheck(3,5));

console.log(vowelCheck(5,4));
