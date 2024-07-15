
// Given a string, return a new string where the first and last chars have been exchanged.

// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba



function frontBack(str){
    if(str.length > 1){
      return str.slice(str.length-1) + str.slice(1, str.length-1) + str[0]
    }
    return str
  }