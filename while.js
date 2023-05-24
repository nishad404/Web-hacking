let i = 1, n = 5;
while (i <= n) {
    console.log(i);
    i += 1;
}
 let sum=0;
 let number = parseInt(prompt("enter number:"));
 while(number>=0){
    sum=sum+number;
    number=parseInt(prompt("enter number::"));
 }
 console.log(`The sum is ${sum}.`);