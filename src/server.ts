import express from 'express'
import path from 'path'
import { ToDoDto } from './dto/ToDoDto'
import bodyParser from 'body-parser'
import { uuid } from './uuid'

const app = express()
const port = 3000

const toDoList: ToDoDto[] = [
  { id: uuid(), message: 'Do Dishes' },
  { id: uuid(), message: 'Clean Car' },
  { id: uuid(), message: 'solve World Hunger' },
]

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/todo', (req, res) => {
  res.json(toDoList)
})

app.post('/api/todo', (req, res) => {
  const message = req.body.message
  if (message) {
    toDoList.push({ id: uuid(), message })
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.delete('/api/todo/:id/delete', (req, res) => {
  const id = req.params.id
  if (id) {
    const index = toDoList.findIndex((x) => x.id === id)
    if (index >= 0) {
      toDoList.splice(index, 1)
      res.sendStatus(200)
    } else res.sendStatus(404)
  } else res.sendStatus(400)
})

app.put('/api/todo/:id/edit', (req, res) => {
  const id = req.params.id
  const message = req.body.message

  if (id && message) {
    const index = toDoList.findIndex((x) => x.id === id)
    if (index >= 0) {
      toDoList[index].message = message
      res.sendStatus(200)
    } else res.sendStatus(404)
  } else res.sendStatus(400)
})

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
