/*let isku={
   method: 'POST',
  body: JSON.stringify({
    title: 'NOman',
    body: 'nai',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
} 
fetch('https://jsonplaceholder.typicode.com/posts',isku)
.then((respone)=>respone.json())
.then((json)=>console.log(json)); */


fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then((respone)=>respone.json())
.then(json=>console.log(json))
