const vowels = ['a ','e','i','o','u','A','E','I','O','U']

function sentance(sentanc){
    let count =0;
    const letters = Array.from(sentanc);

    letters.forEach(function(value){
        if (vowels.includes(value)){
            count ++;
        }
        
    });
    return count;
}

console.log(sentance("Hi I am Tahsin. I am a student of sonargaw univercity department of EEE. EEE Meaning Electrical and Electronic Eneneearing."))
// console.log(count)