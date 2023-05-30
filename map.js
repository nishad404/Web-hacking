//map in js:::


const map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); 


alert(obj.meat); 
console.log(obj);
