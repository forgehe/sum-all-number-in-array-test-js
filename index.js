// eslint-disable-next-line func-style
function sumItems(array) {
  let sum = 0;
  // const sumArray = function(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     let isArraySum = 0;
  //     if (Array.isArray(array[i])) {
  //       console.log(`sumArray(array[${i}]):  ${array[i]}`)
  //       isArraySum += sumArray(array[i]);
  //       console.log(`isArraySum: ${isArraySum}`);
  //       sum += isArraySum
  //     } else {
        
  //       sum += array[i];
  //       console.log(sum);
  //     }
      
  //   }
    
  //   return sum;
  // }
  const sumArray2 = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        total += sumArray2(array[i]);
      } else {
        total += array[i];
      }
    }
    return total;
  };

  return sumArray2(array);
  // Sum all the numbers in the array
}

// console.log(sumItems([1,2,3,4,5]));
// console.log(sumItems([1,[2],3,4,5]));


module.exports = sumItems;