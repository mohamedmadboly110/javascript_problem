// Check if the number is positive or not
// Add the number to the initValue if Positive

// يجمع الارقام الموجبة بس 
function sumOfPositive(arr) {
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current, 0);
}
console.log(sumOfPositive([1 , 2 , 9 ,4]))