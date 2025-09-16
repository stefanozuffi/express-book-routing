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
    //console.log(books)
    res.json(newBook)
}

function update(req, res) {
    const {id} = req.params
    const book = books.find(b => b.id === parseInt(id))

    //Error Handling
    const {title, author, genre} = req.body
    if (!title || !author || !genre) {
        return res.status(400).json({
            error: true,
            message: "Campi richiesti: title, author, genre"
        });
    }

    //Modifica del post
    for (let key in book) {
        if (key == 'id') {
            continue
        }
        book[key] = req.body[key]
    }

    res.json(book)

}

function modify(req, res) {
    const {id} = req.params
    const book = books.find(b => b.id === parseInt(id))

    if (!book) {
        return res.status(404).json({
            error: true,
            message: 'Post Id not found'
        })
    }

    for (let key in book) {
        if (!Object.keys(req.body).includes(key)) {
            continue
        }
        book[key] = req.body[key]
    }

    res.json(book)
}

function destroy(req, res) {
    const {id} = req.params
    const book = books.find(b => b.id === parseInt(id))

    if (!book) {
        return res.status(404).json({
            error: true,
            message: 'Post Id not found'
        })
    }

    books.splice(books.indexOf(book), 1)
    //console.log(books)
    res.json(book)
    
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}
