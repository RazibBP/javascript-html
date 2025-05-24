const number = [1,3,6,7,6,4,3]

const duplicate = number.filter(function(value,index,arry){
   return arry.indexOf(value) !== index;
});
console.log(duplicate)