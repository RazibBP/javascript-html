const paraElement = document.getElementById('dem');
// console.log(paraElement)
const amoun = document.querySelector('#amount');

let count= 0;
let total =100;
function myfun(){
    // let am = 100;
    count++
    
    total = count * 100;
    amoun.innerHTML = total;
    console.log(total,count)
}
paraElement.addEventListener('click' , myfun());

const buttonElement= document.getElementById('button');
const hide = document.getElementById('hide');


buttonElement.addEventListener('click',mybutton);

function mybutton(){
    // return true;
    if (hide.classList.contains('hidden')){
        hide.classList.remove('hidden')
        return true;
    }
    hide.classList.add('hidden') 
}


// const text = document.getElementsByClassName('.aboutp')
// const button = document.getElementsByClassName('.button')

// console.log(text)
// console.log(button)
// button.addEventListener('submit', (event)=>{
//     console.log(event)
// })



// function myfun(){
//     let x =document.getElementById('num').value  ;
//     let text = 100;
//     text *= x;
//     document.getElementById('demo').innerHTML = text;
// }

