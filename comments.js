// Create web server
// 1. Import express
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// 2. Create an instance of express
const app = express()

// 3. Configure express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

// 4. Start server and listen on port 8081
app.listen(process.env.PORT || 8081)

// 5. Create a GET route for '/status'
app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

// 6. Create a GET route for '/comments'
app.get('/comments', (req, res) => {
  res.send([
    {
      username: 'alice',
      content: 'first comment',
      date: new Date()
    },
    {
      username: 'bob',
      content: 'second comment',
      date: new Date()
    }
  ])
})

// 7. Create a POST route for '/comments'
app.post('/comments', (req, res) => {
  res.send({
    message: `Hello ${req.body.username}! Your comment "${req.body.content}" has been posted!`
  })
})