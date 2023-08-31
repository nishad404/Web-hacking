const number=prompt("enter the input number");
let isprime=true;
if(number===1)
{
    console.log("1 is neither prime nor composite number.");
}
else if(number > 1){
    for(let i=2;i<number;i++){
        if(number%i==0){
isprime=false;
break;
        }
    }
    if(isprime){
        console.log('${number} is prime');
    }
    else{
      
        console.log(`${number} is a not prime number`);
}
}
else {
    console.log("The number is not a prime number.");
}