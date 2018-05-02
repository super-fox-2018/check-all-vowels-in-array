function generateBoard(row,col) {
	var finalArr=[]
	for(var i=0;i<row;i++) {
		var subArr=[]
		for(var j=0;j<col;j++) {
			var rowValue = String.fromCharCode(Math.floor(Math.random()*(90-65+1)+65))
			subArr.push(rowValue)
		}
	finalArr.push(subArr)	
	}
	return finalArr
}

function checkAllVowels(str) {
	var vokals = ["a","i","u","e","o"]
	var count=0;
	for(var i=0;i<str.length;i++) {
		for(var j=0;j<vokals.length;j++) {
			if(str[i].toLowerCase() == vokals[j]) {
				count++
			}	
		}
	}
	if(count == str.length) {
		return true
	}else {
		return false
	}
}


function checkBoard(board) {
	var count=0;
	for(var i=0;i<board.length-1;i++) {
		for(var j=0;j<board[i].length-1;j++) {
			if(checkAllVowels(`${board[i][j]}${board[i][j+1]}${board[i+1][j+1]}${board[i+1][j]}`) === true) {
				count++
				console.log(`${board[i][j]}${board[i][j+1]}${board[i+1][j+1]}${board[i+1][j]}`)
			} 
		}
		
	}
	return count
}

var board = generateBoard(4,5)

var dumy = 
[["A","S","C","Y"],
 ["E","O","O","S"],
 ["I","U","I","N"],
 ["M","Y","O","E"],
 ["P","D","A","I"]]

console.log(checkBoard(dumy))