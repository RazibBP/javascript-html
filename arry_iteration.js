const x = [45, 4, 9, 16, 25];
let y = ['']
let z = ['']
function myFunction(value,index,Arry){
    console.log(value)
    console.log(index)
    console.log(Arry)
    return y += value += '<br>';
}

x.forEach(myFunction);

console.log('.....................................................')

function myFunction1(value){
    return value * 2;
}

z = x.map(myFunction1);
console.log(z)

console.log('....................................................')

const numov18 = x.filter(function3);

function function3(value){
    return value > 14;

}
console.log(numov18)

console.log('...................................................')

const sum = x.reduce(function4);

function function4(total,value){
    return total + value ;
}
