const express = require('express')
const { join } = require('path')

// express app
const app = express()

// register view engine
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

// listen for requests
app.listen(3007)

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ]
  res.render('index', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'Create a new blog',
  })
})

// redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
