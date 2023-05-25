class myclass{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    play(a){
         console.log(`${this.name} is ${a}`);
    }
}
const mycar1=new myclass("karim",25);
//console.log(mycar1);
//mycar1.play("well");
const mycar2=new myclass("rahim",45);
//console.log(mycar2);
mycar1.play("well");
mycar2.play("bad");

// class in js:::

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the super class constructor and pass in the name parameter
    }
  
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const d = new Dog("Mitzie");
  const e=new Animal("dunkey");
  d.speak();
  e.speak();