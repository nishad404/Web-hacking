//array in js::

const nisha=["nishad","isa","hacker"];
console.log(nisha[1]);
console.log(nisha[nisha.length-1]);

//loop in js::
for(let i=0;i<nisha.length;i++){
    console.log(nisha[i]);
    console.log(i);
}
//forEach loop :::
 function myfunction(a){
       console.log(a);
 }
 nisha.forEach(myfunction);

///forEach loop:::
 let scores = [12, 55, 70];
 function faruk(name,boy,girl){
        console.log(name,boy,girl);
 }

 scores.forEach(faruk);

///pop in js:::
const mama=["ami","tumi","she"];
console.log(mama.pop());

//push in js:::
const fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits.push("Kiwi","Lemon"));
