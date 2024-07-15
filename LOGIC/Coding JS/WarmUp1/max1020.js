
// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11


function max1020(a, b){
    let maxA = a>= 10 && a<= 20
    let maxB = b>= 10 && b<= 20
    if (maxA && maxB){
      return Math.max(a, b);
    }
      if (maxA){
      return a;
    }
    if (maxB){
    return b;
    }
    return 0;
  }