'use strict'

function checkVowels(str) {
    var kamus = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    var outputVokal = '';
    var outputKonsonan = '';
    var status = false;
    
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < kamus.length; j++) {
            if(str[i] == kamus[j]) {
                status = true;
                outputVokal += kamus[j];
            }
        }
        if(status == false) {
            outputKonsonan += str[i];
        }
    }
    if(outputVokal == '') {
        outputVokal = '[kosong]';
    } else if(outputKonsonan == '') {
        outputKonsonan = '[kosong]'
    }
    return 'Huruf vokal : ' + outputVokal + ' || ' + 'Huruf konsonan : ' + outputKonsonan
    + ' || status : ' + status;
}

console.log(checkVowels('dUduK'));
console.log(checkVowels('TeBiNg'));
console.log(checkVowels('strygwyr'));