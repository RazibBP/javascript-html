const inpu = document.getElementById('result');
// console.log(resultElement)
const buttonElement = document.getElementById('button');
// console.log(buttonElement)
const demo = document.getElementById('demo');
const im = document.getElementById('img')

// const img = document.createElement('img')

function myFunction(){
    let x = document.createElement('img')
    x.setAttribute('src','https://img.freepik.com/free-vector/congrats-greeting-card_53876-82116.jpg?ga=GA1.1.1058464734.1748931231&semt=ais_hybrid&w=740')
    x.setAttribute('width','140px')
    x.setAttribute('height','40px')
    im.appendChild(x);
}
let x = '';
buttonElement.addEventListener('click',(value)=>{
    // console.log(inpu.value)
    if (inpu.value >= 95 ){
        x =('Congratulated you are got in Golden A+')
        myFunction() 
        
    }
    else if (inpu.value >= 90 && inpu.value <95){
        x = ('Congras you are got an A+');
        amyFunction()
        
        
    }
    else if (inpu.value >= 80 && inpu.value < 90){
        x =('Congratulated you are got in A Grade')
    }
    else if (inpu.value >= 70 && inpu.value < 80 ){
        x = ('Congratulated you are got in A- grade')
    }
    else if (inpu.value >= 60 && inpu.value < 70 ){
       x = ('Congratulated you are got in B grade')
    }
    else if (inpu.value >= 50 && inpu.value < 60 ){
        x = ('Congratulated you are got in B- grade')
    }
    else if (inpu.value >= 40 && inpu.value < 50 ){
       x = ('Congratulated you are got in C grade')
    }
    else if (inpu.value >= 33 && inpu.value < 40 ){
        x = ('Congratulated you are pass in the exam')
    }
    else{
        x = ('you are fail in the exam!')
    }
    demo.innerText = x;
    
})
function amyFunction() {
    let x = document.createElement("img");
    x.setAttribute("src", "https://img.freepik.com/premium-vector/congratulations-elegant-gold-template-celebration-handwriting-style_663422-623.jpg?ga=GA1.1.1058464734.1748931231&semt=ais_hybrid&w=740");
    x.setAttribute("width", "100px");
    x.setAttribute("height", "60px");
    x.setAttribute("alt", "The Pulpit Rock");
    im.appendChild(x);
  }

