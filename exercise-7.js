function hitungJumlahKata(str) {

    var counter = 1;
    strS=str.split('')
    
    for(i=0;i<str.length;i++){
        if(str[i]===' '){
            counter++
        }
    }
    return counter
}
    
//TEST-CASE
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

