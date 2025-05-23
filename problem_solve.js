// how to create a code for ludo king random number 1 to 6 in sokka 
// let's start
function ludoking(max,min){
    return Math.floor(Math.random() * (max - min)+1) + min;
}
console.log(ludoking(1,6));


const student = ['Tahsin','Razib','Rakib','Nirob','Shakhor','Onik','Jeet']

console.log(student.sort())


const roll = [1,3,6,8,9,2,3,7,13,17,19]

roll.sort(function rollsort(a,b){
    return (a - b)
})

console.log(roll)

function lepeyear(year){
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !==0))){
        console.log(`${year} is a leap year.`);
    }
    else{
        console.log(`not a leap year.`)
    }
}
lepeyear(2024)

