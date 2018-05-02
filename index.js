function generateBoard(row,col){
    var arr="AXCYEOOSIUINMYOEPDAI"
    var result=[]
    var arrKecil=[]
    for(var i=0; i<row; i++){
        for (var j=0; j<col; j++){
            var acak= arr[Math.floor((Math.random() * arr.length))]
            if(arrKecil.length < col){
                arrKecil.push(acak)
            }
            // console.log(arrKecil)
            if(arrKecil.length === col){
                result.push(arrKecil) 
                arrKecil=[]  
            }
        }    
    }
    return result
}

console.log(generateBoard(5,4))

// var contoh= [
//     ["A", "I", "B", "S", "D"],
//     ["U", "E", "C", "T", "Y"],
//     ["O", "A", "T", "B", "J"]
// ]
function getBlockVowels(contoh){
    var vowels=0
    for (var i=0; i<contoh.length-1; i++){
        var count=0
        for (var j=0; j<contoh[i].length-1; j++){
            if (contoh[i][j]==="A" || contoh[i][j]==="I" || contoh[i][j]==="U" || contoh[i][j]==="E" || contoh[i][j]==="O"){
                count+=1
            }
            if (contoh[i][j+1]==="A" || contoh[i][j+1]==="I" || contoh[i][j+1]==="U" || contoh[i][j+1]==="E" || contoh[i][j+1]==="O"){
                count+=1
            }
            if (contoh[i+1][j]==="A" || contoh[i+1][j]==="I" || contoh[i+1][j]==="U" || contoh[i+1][j]==="E" || contoh[i+1][j]==="O"){
                count+=1
            }
            if (contoh[i+1][j+1]==="A" || contoh[i+1][j+1]==="I" || contoh[i+1][j+1]==="U" || contoh[i+1][j+1]=="E" || contoh[i+1][j+1]==="O"){
                count+=1
            }
            // console.log(count)
            if (count%4===0){
                vowels+=1
            }
           
        }

    }
    return vowels
}
console.log(getBlockVowels(generateBoard(5,4)))