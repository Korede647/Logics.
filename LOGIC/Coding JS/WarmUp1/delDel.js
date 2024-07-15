
// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.


// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel


function delDel(str){
    if(str.indexOf("del") === 1){
      return str.slice(0, 1) + str.slice(4);
    }
    return str;
  }

  delDel("happydel");