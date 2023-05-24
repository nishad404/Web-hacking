//random number print in js:::

function getrandom(max,min){
    return Math.floor(Math.random() * (max-min+1))+min;
}
console.log(getrandom(1,6));

if(time<10){
    console.log(good morning);
}
else if(time<20){
    console.log(good day);
}
else{
    console.log(good evening);
}