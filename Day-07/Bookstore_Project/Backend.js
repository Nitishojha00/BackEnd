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

// For adding/creating book

app.post('/addBook',(req,res)=>{
       console.log(req.body);
       bookstore.push(req.body)
       res.send("Book Added");
});

// For Delete

app.delete('/removeBook/:id',(req,res)=>{
      let id = Number(req.params.id);
      let index = bookstore.findIndex(info=>info.id===id);
      bookstore.splice(index,1);
      res.send("delete successfully");
});

//  Just For Update
app.patch('/patch',(req,res)=>{
    
      let id = req.body.id;
       let book = bookstore.find(info=>info.id===id);
       book.Author = req.body.Author;
       res.send("Data Updated");
});

app.listen(4000,()=>{
    console.log(" Server is running on port 4000");
});


