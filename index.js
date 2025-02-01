const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    "hey": "nodejs",
    "message": "Hello World!",
    "date": new Date()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})