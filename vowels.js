function board(jumlahRow , jumlahCol){
    var panjang = jumlahRow * jumlahCol

    var alpha='abcdefghijklmnopqrstuvwxyz'
    var hasil=[]
    for(let i=0;i<jumlahRow;i++){
        let tampung=[]
        for(let j=0;j<jumlahCol;j++){
            
            var acak =alpha.charAt(Math.round(Math.random() * alpha.length))
            tampung.push(acak)
        }
        hasil.push(tampung)
    }
  return hasil

}


function vowels(input){
    var indeks=[]
    var angka =0
    var vocal='aiueo'
for(let i=0;i<input.length-1;i++){
    for(let j=0;j<input[i].length-1;j++){
        var isi=input[i][j] + input[i][j+1]+ input[i+1][j]+input[i+1][j+1]
        var count=0
        for(let k=0;k<isi.length;k++){
            for(let l=0;l<vocal.length;l++){
                if(isi[k] === vocal[l]){
                    count++
                }
            }
        }
        if(count === isi.length){
            angka++
        }
    }
    
}
return angka
}
var papan=board(5,4)
console.log(papan)
console.log(vowels(papan))
// console.log(vowels([
//     ['a','i','c','d'],
//     ['u','e','c','d'],
//     ['a','a','t','z']
// ]))
