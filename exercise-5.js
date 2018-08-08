/*
Problem
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata){
    var arr1=kata.split('')
    var arr2=kata.split('').reverse()

    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i]){
        return false;
        }
    }
    
    return true;
    
}

//TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

