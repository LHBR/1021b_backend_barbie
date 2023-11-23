// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('barbie');

// Create a new document in the collection.
db.getCollection('filmes').insertOne({
   
        _id: 3,
        titulo: "O Poderoso Chefão",
        descricao: "Filme de máfia",
        imagem: "fotofilme.jpg",
      
});
