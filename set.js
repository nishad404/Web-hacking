
//set in js::
//set is a method of js where can not print in duplicate value::


const letters = new Set();

console.log(letters.add("a"));
console.log(letters.add("b"));
console.log(letters.add("c"));


//every value pass in for each:::

const alphabet=new Set(['a','b','c','d']);
let x='';
alphabet.forEach(function(value){
    x=x+value;
})
console.log(x);