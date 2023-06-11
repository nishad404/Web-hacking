class Ami{
 constructor(brand){
    this.car=brand;
 }
 present(){
    return 'I have a ' + this.car;
 }
}

class Tumi extends Ami{
    constructor(brand,mod){
       super(brand);
        this.model=mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;

    }
}

const myname=new Tumi('toyota','1967');
console.log(myname.show());