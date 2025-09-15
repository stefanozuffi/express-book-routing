const express = require(express)
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