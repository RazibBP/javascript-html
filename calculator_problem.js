const display = document.getElementById('display');
const values = document.getElementsByClassName('addValue')

let string ='' ;
let arr  =  Array.from(values);

console.log(values);

arr.forEach(function(values){
    if (arr.values == '='){
        string = eval(values);
    }
    else {
        string +=values;
    }
})
