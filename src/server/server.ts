import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { setupDatabase } from './database'
import ToDoRouter, { TO_DO_PATH } from './ToDoRouter'

const app = express()
const port = process.env.PORT || 3000

setupDatabase()

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(TO_DO_PATH, ToDoRouter)

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`SERVER: listening on port ${port}`)
})
