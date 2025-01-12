function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let x=0; x,array.length; x++){
    const comp = target-array[x]

    for(let y=x+1; y<array.length; y++ )
      if(array[y]===comp){
        return true;
      }
    
  }
 return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  define a function called target sum the should should take in two arguments an array and a target value
  the fuction outputs true if any pair of numbers in the array adds up to 10 or 25.
  iterate over the array and subtract the array from the target value
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;
