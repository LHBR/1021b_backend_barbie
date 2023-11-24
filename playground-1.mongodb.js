// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('db_barbie');

// Create a new document in the collection.
db.getCollection('filmes').insertMany([

    {
        _id: 2,
        titulo: "Barbie",
        descricao: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
        imagem: "/barbie.png"
    },
    {
        _id: 3,
        titulo: "Transformers",
        descricao: "Uma nova ameaça capaz de destruir todo o planeta surge fazendo com que Optimus Prime e os Autobots se unam a uma poderosa facção de Transformers conhecida como Maximals para salvar a Terra.",
        imagem: "/transformers.jpg"
    },
    {
        _id: 4,
        titulo: "A Freira 2",
        descricao: "Em 1956, na França, um padre é assassinado e parece que um mal está se espalhando. Determinada a deter o maligno, irmã Irene mais uma vez fica cara a cara com uma força demoníaca.",
        imagem: "/afreira2.png"
    },
    
]

);
