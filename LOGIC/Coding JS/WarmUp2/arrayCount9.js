// Given an array of ints, return the number of 9's in the array.

function arrayCount9(nums){
    let count = 0
    for(let i = 0; i< nums.length; i++){
      if(nums[i] === 9){
        count ++
      }
    }
    return count
  }