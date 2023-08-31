function myarray(number){
    let sum=0;
    for(let x=0;x<number.length;x++){
        sum=sum+number[x];  
    }
   return sum;
}
let y=[1,2,3,4,5,6];
console.log(myarray(y));




function findmax(numbers){

    let max=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(max<numbers[i])
        max=numbers[i];
    }
    return max;
}
const num=[3,4,5,6,7,8];
console.log(findmax(num));