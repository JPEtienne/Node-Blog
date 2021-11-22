const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const blogRoutes = require('./routes/blogRoutes')

// express app
const app = express()

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

// connect to mongodb
const dbURI = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@node-blog.qektg.mongodb.net/node-blog?retryWrites=true&w=majority`
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3007))
  .catch((err) => console.error(err))

// register view engine
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})

app.use('/blogs', blogRoutes)

// redirect
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
