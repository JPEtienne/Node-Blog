const express = require('express')
const { join } = require('path')

// express app
const app = express()

// listen for requests
app.listen(3007)

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', 'front', 'views', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, '..', 'front', 'views', 'about.html'))
})

// redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404
app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '..', 'front', 'views', '404.html'))
})
