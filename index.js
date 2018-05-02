function generateBoard(col,row){
	let board = []
	let alphabet = 'OOOOOOOOOOOAWFAWFOOOOFAWFWA'
	for(var i=0;i<row;i++){
		board.push([])
		for(var j=0;j<col;j++){
			board[i].push(alphabet[Math.floor(Math.random()*26)])
		}
	}
	let counterVowelsBlock = 0
	for(var i=0;i<board.length;i++){
		if (i!==board.length-1) {
			for(var j=0;j<board[i].length-1;j++){
				if (checkVowelsBlock(board[i][j])===true) {
					if (checkVowelsBlock(board[i][j+1])===true) {
						if (checkVowelsBlock(board[i+1][j])===true) {
							if (checkVowelsBlock(board[i+1][j+1])===true) {
								counterVowelsBlock++
							}
						}
					}
				}
			}
		}
		
	}
	console.log(board);
	console.log(counterVowelsBlock);
}

function checkVowelsBlock(value){
	if (value === 'A' || value === 'I' || value === 'U' || value === 'E' || value === 'O') {
		return true
	}
	return false
}

generateBoard(5,3)