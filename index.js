

function generateRandomAlp(num1, num2){

    function randomAlp(){
        
        var alp = 'abcdefghijklmnopqrstuvwxyz';
        var alpRandom = Math.round(Math.random() * alp.length-1);
        return alp[alpRandom];
    }
    
    var row = num1;
    var col = num2;
    var arr = [];
    
    for(let a=0; a<=row; a++){
        arr.push([]) ;
        for(let b = 0; b<=col-1; b++){
          arr[a].push(randomAlp());
        }
    }
    
    return arr;

}

var generateAlp = (generateRandomAlp(5,4))


function checkVowelsInArray(arr){
    
    function checkAllVowels(str){
    
        var library = 'AIUEO';
        if(str.length === 0){
            return true;
        }
    
        for(let a=0; a<=library.length-1; a++){
            if(library[a]===str[0]){
                return checkAllVowels(str.slice(1))
            }
        }
        return false;
        
    }
       
   var counter = 0
   for(let a = 0; a < arr.length-1; a++){
        for(let b=0; b< arr[a].length-1; b++){
            var temp = [];
            temp.push(arr[a][b]);
            temp.push(arr[a][b+1]);
            temp.push(arr[a+1][b]);
            temp.push(arr[a+1][b+1]);
            
            if(checkAllVowels(temp)) {
                   counter++;
             }
            
        }

   }
   return counter
}

console.log(checkVowelsInArray([ ['A','X','C','Y'], 
['E','O','O','S'], 
['I','U','I','N'], 
['M','Y','O','E'],
['P','D','A','I']]))