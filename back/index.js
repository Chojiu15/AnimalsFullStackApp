const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const animalsRouter = require('./routes/animalsRouter')
app.use(express.urlencoded({
    extended : false
}))
const cors = require('cors')
app.use(cors())

app.use('/api/animals', animalsRouter)


app.listen(port, console.log(`Server is listening on port ${port}`))