const {books} = require('../data/bookArray.js')

function index(req, res) {
    let targets = books

    if (Object.keys(req.query).length > 0) {
        console.log('Siamo entrati nello if')
        targets = books.filter(book => {
            Object.keys(req.query).every(key => req.query[key] === book[key])
        })
    }
   
    res.json(targets)
}

function show(req, res) {
    const id = parseInt(req.params.id)
    const book = books.find(b => b.id === id)

    if (!book) {
        return res.status(404).json({
            error: true,
            message: 'No correspondent id was found'
        })
    }

    res.json(book)
}

function store(req, res) {
    const {title, author, genre} = req.body

    //Error Handling
    if (!title || !author || !genre) {
        return res.status(400).json({
            error: "Campi richiesti: title, author, genre"
        });
    }
    
    //Creazione nuovo libro
    const maxID = Math.max(...books.map(book => book.id))
    
    const newBook = {
        id : maxID + 1,
        title,
        author,
        genre
    }

    books.push(newBook)
    res.json(newBook)
}

function update(req, res) {
    
}

function modify(req, res) {
    
}

function destroy(req, res) {
    
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
