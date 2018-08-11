function mengelompokkanAngka(arr) {
    var output =[]
    var arr1=[] //genap
    var arr2=[] //ganjil
    var arr3=[] //kelipatan 3

    //mencari bilangan genap
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 === 0) {
            var genap = 0;
            genap = arr[i]
            arr1.push(genap)
        }    
    }
    //supaya gak ada kelipatan 3 di array genap
    for(var j = 0 ; j < arr1.length ; j ++){
        if (arr1[j] % 3 === 0){
            arr1.splice(j, 1)
        }
    
    }
    //mencari bilangan ganjil
    for(k = 0 ; k < arr.length ; k++){
        if(arr[k] % 2 !== 0){
            var ganjil = 0;
            ganjil = arr[k]
            arr2.push(arr[k])
        }
    }
    //supaya gak ada kelipatan 3 di array ganjil
    for(var l = 0 ; l < arr2.length ; l ++){
        if (arr2[l] % 3 === 0){
            arr2.splice(l, 1)
        }
    }

    //mencari kelipatan 3
    for(var m = 0 ; m < arr.length ; m++ ){
        if(arr[m] % 3 === 0){
            var kelipatan3 = 0;
            kelipatan3 = arr[m]
            arr3.push(arr[m])
        }
    }

//menggabungkan arr1,arr2 dan arr3 menjadi multidimensional array output
output.push(arr1)
output.push(arr2)
output.push(arr3)
return output
}
  
// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]*/