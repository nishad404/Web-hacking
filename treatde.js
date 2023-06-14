const student={
    myName:'Nishad babu',
    money:50000,
    study:'CSE',
    subjects:['math','programming','electronics'],
    exam:function(){
        return this.myName + 'is a bad boy';

    },
    improve:function(subject){
        this.exam();
        return `${this.myName} is progress on ${subject}`


    },
    treatby:function(amount,tips){
        this.money=this.money-amount-tips;
        return this.money;
    }
}

const output=student.exam();
console.log(output);
const reexam=student.improve(10);
console.log(reexam);
const treat=student.treatby(500,400);
console.log(treat);

  