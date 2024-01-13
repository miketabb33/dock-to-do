import express from 'express'
import path from 'path'

const app = express()
const port = 3000

app.use(express.static(`${__dirname}/public`))

app.get('/api/*', (req, res) => {
  res.send('API!')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
