
// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false


function nearHundred(n){
    let diff100 = Math.abs(100 - n) 
    let diff200 = Math.abs(200 - n)
    
    return diff100 <= 10 || diff200 <= 10
  }