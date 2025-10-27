 // Finding book with that id
 let book = bookstore.find(info=>info.id===id);


// For Deleteing
 let index = bookstore.findIndex(info=>info.id===id);
      bookstore.splice(index,1);