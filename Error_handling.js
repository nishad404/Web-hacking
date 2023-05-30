let x=4;
try{
    if(x=='') throw "empty";
    if(isNaN(x)){
        console.log("false");
    }
    else{
        console.log("true");
    }
    
    //x=Number(x);
    if(x < 5) throw "too low";
    if (x > 10) throw "too high";
}
catch(err){
    console.log(err);
}
console.log("this is number");