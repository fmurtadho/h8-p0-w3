//Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

//Example
//input "hello world!"
//output
//"!dlrow olleh"

function balikString(str) {
    var outputString = "";

    for (i = str.length - 1; i >= 0; i--) { 
        
        outputString += str[i];
    }
    
    return outputString
}
 
console.log(balikString('Hello world!'));