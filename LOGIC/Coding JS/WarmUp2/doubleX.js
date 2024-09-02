
// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// Examples

// doubleX('axxbb') → true
// doubleX('axaxax') → false
// doubleX('xxxxx') → true


function doubleX(str){
//    let x = str.indexOf('x');
let x = str.charAt("x");
    for(let i = 0; i < str.length; i++){
        if(str[i] === x && str[i + 1] === "x"){
            return true;
        }
        else{
            return false;
        }
    }
    
    return false;
}

console.log(doubleX("axaxax"));