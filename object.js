const car={
    name:"Fait",
    model:700,
    wight:"800kg",
    color:"white",
    start:function(){
        console.log("car has start");
    },
    drive:function(){
        console.log("car is driving");
    },

};
console.log(car.model);
car.start();
