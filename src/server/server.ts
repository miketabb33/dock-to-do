import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { ToDoDatabase, setupDatabase } from './database/ToDoDatabase'
import ToDoRouter, { TO_DO_PATH } from './ToDoRouter'
import { IToDoDatabase } from './database/IToDoDatabase'
import { InMemoryDB } from './database/InMemoryDatabase'

const app = express()
const port = process.env.PORT || 3000

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
