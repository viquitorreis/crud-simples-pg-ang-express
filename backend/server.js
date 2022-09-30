const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const namesRoutes = require('./src/routes')

// Cors
app.use(cors())

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Rotas
app.get('/', (req, res) => {
    res.send('<h1>Home page do servidor</h1>')
})

app.use('/api', namesRoutes)
// Porta
const port = 3000
app.listen(port, () => console.log(`Servidor na porta ${port}`))
