import express from 'express'
import path from 'path'
import { ToDoDto } from './dto/ToDoDto'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

const toDoList: ToDoDto[] = [
  { id: '1', message: 'Do Dishes' },
  { id: '2', message: 'Clean Car' },
  { id: '3', message: 'solve World Hunger' },
]

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/todo', (req, res) => {
  setTimeout(() => {
    res.json(toDoList)
  }, 2000)
})

app.post('/api/todo', (req, res) => {
  if (req.body.message) {
    toDoList.push({ id: '4', message: req.body.message })
  }
  setTimeout(() => {
    res.json({ cool: 'Sup Baby!' })
  }, 2000)
})

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
