const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//available  routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/state',require('./routes/getstate'))
app.use('/api/recipe',require('./routes/getrecipe'))

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
