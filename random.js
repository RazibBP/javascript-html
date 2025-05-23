// rnadom number in between 2  min one (include) and one max (exclude)
function randomNumber(max,min){
    return Math.floor(Math.random() * (max - min)) + min
}
 console.log(randomNumber(1,9))


// random number between 2 in min and max both include.
function randomnum(max,min){
    return Math.floor(Math.random() * (max - min ) + 1) + min ;
}

console.log(randomnum(1,6))