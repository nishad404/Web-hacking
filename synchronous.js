const process = (customer) => {
console.log('process order for customer1');
var presentTime = new Date().getTime();
while(presentTime + 3000 >=  new Date().getTime());
console.log('order process for customer 1');
}
console.log('take order for customer 1');
process();
console.log('complete order for customer 1');