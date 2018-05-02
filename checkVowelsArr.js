function checkVowelArr(row,col){
    let arrRandom = [];
    const vowel = ['A','E','I','O','U'];
    let count = 0;
    arrRandom = generateArray(row, col);
    // arrRandom = [['A','X','C','Y'],['E','O','O','S'],['I','U','I','N'],['M','Y','O','E'],['P','D','A','I']];
    for (let i = 0; i < arrRandom.length-1; i++){
        for (let j=0; j < arrRandom.length - 2; j++){
            if (vowel.indexOf(arrRandom[i][j]) !== -1 
            && vowel.indexOf(arrRandom[i][j+1]) !== -1 
            && vowel.indexOf(arrRandom[i+1][j]) !== -1 
            && vowel.indexOf(arrRandom[i+1][j+1]) !== -1){
                count++
            }
        }
    }
    // console.log(arrRandom);
    return count;
}

function randomGenerator(){
    const rand = 'AEHIOUZ';
    return rand.charAt(Math.floor(Math.random()*(rand.length))); 
}

function generateArray(row, col){
    let arrColumn = [];
    for (let i=0; i < row; i++){
        let arrRow = [];
        for (let j=0; j < col; j++){
            arrRow.push(randomGenerator());
        }
        arrColumn.push(arrRow);
    }
    return arrColumn;
}

console.log (checkVowelArr(5,4));
/*
[
[ 'J', 'A', 'M', 'F' ],
[ 'H', 'H', 'A', 'J' ],
[ 'C', 'F', 'C', 'L' ],
[ 'F', 'K', 'B', 'I' ],
[ 'J', 'G', 'A', 'L' ] ]
[0][0], [0][1]
[1][0], [1][1]

[0][1], [0][2]
[1][1], [1][2]
*/

