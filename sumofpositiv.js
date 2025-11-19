// Check if the number is positive or not
// Add the number to the initValue if Positive

// يجمع الارقام الموجبة بس 

function sumOfPositive(arr){
  let initValue = 0 
  for(let i = 0; i< arr.length; i++){
    if (arr[i]> 0){
      initValue+= arr[i]
    }

  }
  return initValue;
}
console.log(sumOfPositive([1 , 9 ,-4 , 9]))


// another solution


function sumPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
console.log(sumPositive([1 ,  9 , -4 , 9]))
