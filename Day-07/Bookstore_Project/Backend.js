const express = require('express');
const app = express();

app.use(express.json());

let bookstore = [
    {id:1 , "Name":"Nitish" , "Author":"Ojha Ji"},
    {id:2 , "Name":"Yogesh" , "Author":"Ojha Ji"},
    {id:3 , "Name":"Chotu" , "Author":"Ojha Ji"}
];


app.get('/',(req,res)=>{
      res.send("Hello");
})


app.get('/books',(req,res)=>{
      res.send(bookstore);
})

app.get('/book/:id',(req,res)=>{
      let id = Number(req.params.id);
      const result = bookstore.find(info=>info.id===id);
      res.send(result);
});


app.post('/addBook',(req,res)=>{
       console.log(req.body);
       bookstore.push(req.body)
       res.send("Book Added");
});

app.delete('/removeBook/:id',(req,res)=>{
      let id = Number(req.params.id);
      bookstore = bookstore.filter(book => !(book.id === id))
      res.send("delete successfully");
});


app.listen(4000,()=>{
    console.log(" Server is running on port 4000");
});


