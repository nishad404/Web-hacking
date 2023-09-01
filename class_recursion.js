class myclass{
    constructor(name,gender,age,country,relation){
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.country=country;
        this.relation=relation;
    }
    gett(){
         alert(`My name is ${this.name} and ${this.gender} age is ${this.age} country is ${this.country} and ${this.relation} `);
    }
}
const person=new myclass("nishad","male",23,"bangladesh","single");
person.gett();





function myfact(n){
    if(n===0){
        return 1;
    }
    else{
        return n*myfact(n-1);
    }

}

const name1=myfact(5);
console.log(`${name1}`);