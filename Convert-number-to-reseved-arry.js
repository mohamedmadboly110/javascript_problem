// given an arry of postive number and repeat the inverse of an arry
// for example from 54321 to  [ 1 , 2 , 3 , 4 , 5]


function digitize (n){
    return n 
    .toString()
    .split("")
    .map((n) => Number (n));

}
console.log(digitize(54321))

