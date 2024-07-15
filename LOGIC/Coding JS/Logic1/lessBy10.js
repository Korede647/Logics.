// lessBy10

// Given three ints, a b c, return true if one of them is 10 or more less than one of the others.



// lessBy10(1, 7, 11) → true
// lessBy10(1, 7, 10) → false
// lessBy10(11, 1, 7) → true


function lessBy10(a, b, c){
  if((a - b >= 10) || (a - c >= 10) || (b - c >= 10) || (b - a >= 10) || (c - a >= 10) || (c - b >= 10)){
    return true;
  }
  return false;
}