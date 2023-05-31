let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);


let num = "Visit W3Schools";
let w = text.search(/w3schools/i);
console.log(w);

let number = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);