import express from 'express'
import path from 'path'
import { ToDoDto } from './dto/ToDoDto'

const app = express()
const port = 3000

const toDoList: ToDoDto[] = [
  { id: '1', message: 'Do Dishes' },
  { id: '2', message: 'Clean Car' },
  { id: '3', message: 'solve World Hunger' },
]

app.use(express.static(`${__dirname}/public`))

app.get('/api/todo', (req, res) => {
  res.json(toDoList)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
