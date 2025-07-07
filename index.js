require('dot-env')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h2>Login Page</h2>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
