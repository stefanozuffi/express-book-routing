const express = require('express')
const app = express()
const port = 3001

//Utilities
app.use(express.json())
app.use(express.static('public'))

//Listen
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

//-----Home------ 
app.get('/api/', (req, res) => {
    res.send('Welcome to the Server of my book store')
})

//-----Router-----
const router = require('./router/router.js')
app.use('/api/books', router)

//---Server Error handler
const serverError = require('./middlewares/serverError.js')
app.use(serverError)

//--- EndPoint not found Handler
const notFoundErr = require('./middlewares/notFound.js')
app.use(notFoundErr)