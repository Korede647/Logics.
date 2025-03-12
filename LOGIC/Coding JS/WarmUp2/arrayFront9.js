// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

function arrayFront9(nums){
    let newArray = nums.slice(0, 4)
    if(newArray.includes(9)){
      return true
    }
    return false
  }