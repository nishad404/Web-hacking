
function person(firstname,lastname){
    return{
        firstname:firstname,
        lastname:lastname,
        fullname:function(){
            console.log(this.firstname + this.lastname);
        }

    }

}
console.log(person('nishad','babu')); 


function Person1(firstname1,lastname2){
   
        this.firstname1=firstname1;
        this.lastname=lastname2;
        this.fullname=function(){
            console.log(this.firstname1 + this.lastname2);
        };

    }

    const per=new Person1('ami','tumi');  ///constructor
    console.log(per);
