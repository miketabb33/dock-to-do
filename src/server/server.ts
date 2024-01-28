import express from 'express'
import path from 'path'
import { ToDoDto } from '../dto/ToDoDto'
import bodyParser from 'body-parser'
import { uuid } from '../uuid'
import { sendResponse } from './sendServerResponse'

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

app.get('/api/todo', (_, res) => {
  sendResponse({ res, code: 200, data: toDoList })
})

app.post('/api/todo', (req, res) => {
  const message = req.body.message
  if (message) {
    toDoList.push({ id: uuid(), message })
    sendResponse({ res, code: 200 })
  } else {
    sendResponse({ res, code: 400, error: 'Bad Endpoint' })
  }
})

app.delete('/api/todo/:id/delete', (req, res) => {
  const id = req.params.id
  if (id) {
    const index = toDoList.findIndex((x) => x.id === id)
    if (index >= 0) {
      toDoList.splice(index, 1)
      sendResponse({ res, code: 200 })
    } else sendResponse({ res, code: 404, error: 'To do item not found' })
  } else sendResponse({ res, code: 400, error: 'Bad Endpoint' })
})

app.put('/api/todo/:id/edit', (req, res) => {
  const id = req.params.id
  const message = req.body.message

  if (id && message) {
    const index = toDoList.findIndex((x) => x.id === id)
    if (index >= 0) {
      toDoList[index].message = message
      sendResponse({ res, code: 200 })
    } else sendResponse({ res, code: 404, error: 'To do item not found' })
  } else sendResponse({ res, code: 400, error: 'Bad Endpoint' })
})

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
