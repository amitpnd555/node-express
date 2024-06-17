const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello From Azure cicd! Rechecking pm2 start app.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})