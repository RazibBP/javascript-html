const points = [40, 100, 1, 5, 25, 10];

function function1(){
    document.getElementById('demo').innerHTML = points.sort() ;
}

function function2(){
    document.getElementById('demo').innerHTML = points.sort(function(a,b){return a - b ;});
}


