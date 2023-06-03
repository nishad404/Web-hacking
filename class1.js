class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;

    }
    run(velocity){
        console.log(this.name + ' is running in ' + velocity);
   }
}

const bmw=new Car('BMW',2000);
const audi=new Car('audi',2001);
bmw.run('100 km per hour');
console.log(bmw);