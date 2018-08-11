function angkaPalindrome(input){

for(var i=0;i<=input;i++){

    input++;

    var str = input.toString();

    var dibalik=''

    for(var j=str.length-1;j>=0;j--){

        dibalik = dibalik + str[j]

        }

    if(input==dibalik){

        return input;

        }
    }
}

//TEST-CASE
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001