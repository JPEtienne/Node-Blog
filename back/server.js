const { createServer } = require('http')
const { readFile } = require('fs')
const { join } = require('path')

const server = createServer((req, res) => {
  // set header content type
  res.setHeader('Content-Type', 'text/html')

  let viewPath
  switch (req.url) {
    case '/':
      viewPath = 'index.html'
      break
    case '/about':
      viewPath = 'about.html'
      break
    default:
      viewPath = '404.html'
      break
  }

  // send an html file
  readFile(join(__dirname, '..', 'front', 'views', viewPath), (err, data) => {
    if (err) {
      console.log(err)
      return res.end()
    }
    res.end(data)
  })
})

server.listen(3007, 'localhost', () => {
  console.log('listening for request on port 3000')
})
