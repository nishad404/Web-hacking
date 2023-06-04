

///this keyword used object insteade of same name in js:::



const baby = {
    firstname:"nishad",
    lastname:"babu",
    id:1312,
    fullname:function(){
        return this.firstname + " " + this.lastname;
    },
    getfullname:function(){
        return this.fullname();
    }
};
console.log(baby.getfullname());