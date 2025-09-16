const {books} = require('../data/bookArray.js')

function index(req, res) {
    let targets = books
    if (req.query) {
        
        targets = books.filter(book => {
            Object.keys(req.query).every(key => req.query[key] === book[key])
        })
    }
   
    res.json(targets)
}

function show(req, res) {
    const {id} = req.params.id
    const book = books.find(b => b.id === parseInt(id))

    if (!book) {
        res.status(404).json({
            error: true,
            message: 'No correspondent id was found'
        })
    }

    res.json(book)
}

function store(req, res) {
    
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
