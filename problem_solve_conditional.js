const age = 18;

if(age >= 18 && age < 30){
    console.log("You are adult!")
}
else{
    console.log("You are not adulyt!")
}

let result = (
    (age >= 18)
        ?(age <30)
            ?"You are Adult"
            :"You are an old"
        :"You are young!"
    );

console.log(result)