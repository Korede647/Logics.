
// Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

// startOz('ozymandias') → oz
// startOz('bzoo') → z
// startOz('oxx') → o


function startOz(str){
    if(str[0] === "o" && str[1] === "z"){
      return str.slice(0, 2)
    }
     if(str[0] === "o" && str[1] !== "z"){
      return str.slice(0, 1)
    }
    if(str[0] !== "o" && str[1] === "z"){
       return str.substring(1, 2)
    }
        return ""
  }