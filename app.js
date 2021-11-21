const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')

// express app
const app = express()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

// connect to mongodb
const dbURI = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@node-blog.qektg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// register view engine
app.set('view engine', 'ejs')

// listen for requests
app.listen(3007)

app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))


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
