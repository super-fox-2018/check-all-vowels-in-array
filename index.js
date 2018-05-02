'use strict'

var createNestedArr = (Row,Col) => {
    var output = []
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for(var i = 0 ; i < Row ; i++){
        output[i] = []
        for(var j = 0; j < Col ; j++){
            output[i].push(alphabet[parseInt(Math.random()*alphabet.length-1)])
        }
    }
    return output
}

var checkvowelsinarray = (array) => {
    var counter = 0
    var vowelchecker = 'aiueo'.split('')
    for(var i = 0; i < array.length-1; i++){
        for(var j = 0; j < array[i].length-1; j++){
            if(vowelchecker.indexOf(array[i][j])>=0&&vowelchecker.indexOf(array[i+1][j])>=0&&vowelchecker.indexOf(array[i][j+1])>=0&&vowelchecker.indexOf(array[i+1][j+1])>=0){
                counter++
            }
        }
    }
    return counter
}

var NesterArray = createNestedArr(5,3)
console.log(NesterArray)
console.log(checkvowelsinarray(NesterArray))