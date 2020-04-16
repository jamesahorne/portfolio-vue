const express = require('express')
const app = express()

// Set static folder
app.use(express.static(__dirname + '/public/'))

app.get('/', function (req, res) {
  res.render('index')
})

const port = process.env.PORT || 3000

app.listen(port)
