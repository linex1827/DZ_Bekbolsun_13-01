const obj = {
    key1: '*',
    key2: '**',
    key3: '***',
    key4: '****',
    key5: '*****',
    key6: '******',
    key7: '*******',
}

for(let key in obj){
    console.log(obj[key])
}

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
