const http = require('http')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Express API

const app = express()
app.use(express.json())

// Log errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.send(500)
})

// Setup if in dev
if (process.env.NODE_ENV === 'development') {
  console.log(`🛠️  DEVELOPMENT Mode detected, enabled CORS policy *`)
  app.use(
    cors({
      origin: '*',
    })
  )
}

app.get('/', async (req, res) => {
  res.json({ hello: 'world' })
})

// START THE SERVER
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${process.env.PORT}`)
)
