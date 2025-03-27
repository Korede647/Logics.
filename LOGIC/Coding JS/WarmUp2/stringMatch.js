// Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", and "az" substrings appear in the same place in both strings.



function stringMatch(a, b){
    let count = 0
    let string
    let stringB
    for(let i = 0; i < a.length - 1; i++){
      string = a.substring(i, i+2)
      stringB = b.substring(i, i+2)
      if(string === stringB){
        count ++
      }
    }
    return count
  }