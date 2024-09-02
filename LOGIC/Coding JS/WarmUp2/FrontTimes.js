// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front.

// frontTimes('Chocolate', 2) -> ChoCho
// frontTimes('Chocolate', 3) -> ChoChoCho
// frontTimes('Abc', 3) -> AbcAbcAbc


function frontTimes(str, n) {
    let newStr = str.slice(0,3).split("")
    for(let i = 0; i = n*2; i++){
        newStr += newStr[i]
    }
    return newStr;
}

console.log(frontTimes("Abc", 2));