const nan= a => a*a;


console.log(nan(4));



const squar = x => x * x;

console.log(squar(4)); 




let group={
    title:"our groups",
    student:["alice","bob"],
    showlist(){
        this.student.forEach(students=>console.log(this.title + ' '+ students));
    }

};
group.showlist(); 


/*let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student)
      );
    }
  };
  
  group.showList();*/