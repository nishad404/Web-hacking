

function mama(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(work => console.log(work))
}


///

function baby(){
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
    .then(result => happy(result))
}


function happy(result){
    for(const user of result){
       // console.log(result);
        console.log(user.username);
        console.log(result);
   }

}