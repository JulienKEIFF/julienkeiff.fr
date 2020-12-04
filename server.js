const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.resolve(__dirname, 'dist')))
app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

// eslint-disable-next-line
app.use(function (err, req, res, next) {
  // eslint-disable-next-line
  console.error(err)
  res.status(500).send('An error was occured')
})

app.listen(process.env.PORT || 3000, function () {
  // eslint-disable-next-line
  console.log('Example app listening on port ' + process.env.PORT || 3000 + '!')
})