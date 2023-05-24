//random number print in js:::

function getrandom(max,min){
    return Math.floor(Math.random() * (max-min+1))+min;
}
console.log(getrandom(1,6));

