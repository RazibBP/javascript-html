let display = document.getElementById('display');

function addV(){
    display.value += '7';
}

function add(){
    display.value = '';
}
function onedel(){
    display.value = display.value.toString().slice(0,-1)
}
function eva(){
    display.value = eval(display.value)
}
function adm(){
    display.value  += '+'
}
function par(){
    display.value += '%'
}
function divison(){
    display.value += '/'
}
function mul(){
    display.value +='*'
}
function sub(){
    display.value +='-'
}
function dzero(){
    display.value += '00'
}
function zero(){
    display.value += '0'
}
function one(){
    display.value += '1'
}
function two(){
    display.value += '2'
}
function three(){
    display.value += '3'
}
function four(){
    display.value += '4'
}
function five(){
    display.value +='5'
}
function six(){
    display.value += '6'
}
function eight(){
    display.value += '8'
}
function nine(){
    display.value +='9'
}
function dot(){
    display.value += '.'
}