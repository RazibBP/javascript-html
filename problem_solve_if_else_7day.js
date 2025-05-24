const day = new Date().getDay()
console.log(day)
let result;

if( day == 5){
    result = "Friday"
}else if(day == 6){
    result = "Saturday"
} else if(day == 0){
    result ="Sunday"
} else if(day == 1){
    result = "Monday"
} else if(day == 2){
    result = "Tuesday"
} else if(day == 3){
    result = "Wednesday"
} else if (day == 4){
    result = "Thursday"
} else{
    result = "DON'T Matach Result" 
}
console.log(result)