function targetTerdekat(arr) {
var oStart = 0;
xAda = 0;
var xEnd = 0;
var xDec = 0;
//pertama tama memastikan ada x
for(var x = 0 ; x < arr.length ; x++){
    if(arr[x] === 'x'){
        xAda = xAda + 1
    }
}
//proses apabila ada x
if(xAda > 0){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] === 'o'){
            oStart = oStart +  i
            break;
        }
    }
    
    var xCount = 0; //untuk memastikan x nya sesudah atau sebelum
    for(var l = oStart ; l < arr.length ; l++){
        if(arr[l] === 'x'){
            xCount = xCount + 1
            break;
        }
    }
    for(var m = oStart ; m >= 0 ; m--){
        if(arr[m] === 'x'){
            xCount = xCount - 1
        }
    }
    
    if(xCount > 0){ //jika x nya sesudah
        for(var j = oStart ; j < arr.length ; j++){    
            if(arr[j] === 'x'){
                xEnd = xEnd + j
                break;
        }
    }    
    }else if(xCount <= 0){ //jika x nya sebelum
        for(n = oStart ; n >= 0 ; n--){
            if(arr[n] === 'x'){
                xEnd = xEnd + n
                break;
            }
        }
    }

    return Math.abs(xEnd - oStart) // hasil akhir proses

//tidak perlu di proses apabila tidak ada x
} else if (xAda <= 0){
    return 0}

}//end function
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2