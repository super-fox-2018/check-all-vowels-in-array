function generateBoard(row, col) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = [];

  for (let i = 0; i < row; i++) {
    let rows = [];

    for (let j = 0; j < col; j++) {
      var randomChar = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      rows.push(randomChar);
    }
    output.push(rows)
  }
  return output;
}

console.log(generateBoard(5,4));
