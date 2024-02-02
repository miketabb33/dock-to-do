import { ToDoDatabase } from './database'
import { sendResponse } from './sendServerResponse'
import { Router } from 'express'

export const TO_DO_PATH = '/api/todo'
const ToDoRouter = Router()
const toDoDatabase = new ToDoDatabase()

ToDoRouter.get('/', async (_, res) => {
  try {
    const list = await toDoDatabase.getToDos()
    sendResponse({ res, code: 200, data: list })
  } catch {
    sendResponse({ res, code: 400, error: 'Unable to get to dos' })
  }
})

ToDoRouter.post('/', async (req, res) => {
  const message = req.body.message
  if (message) {
    try {
      await toDoDatabase.createToDo(message)
      sendResponse({ res, code: 200 })
    } catch {
      sendResponse({ res, code: 400, error: 'Data was unable to post' })
    }
  } else {
    sendResponse({ res, code: 400, error: 'Bad Endpoint' })
  }
})

ToDoRouter.delete('/:id/delete', async (req, res) => {
  const id = req.params.id
  if (id) {
    try {
      await toDoDatabase.deleteToDo(id)
      sendResponse({ res, code: 200 })
    } catch {
      sendResponse({ res, code: 400, error: 'Data was unable to delete' })
    }
  } else sendResponse({ res, code: 400, error: 'Bad Endpoint' })
})

ToDoRouter.put('/:id/edit', async (req, res) => {
  const id = req.params.id
  const message = req.body.message

  if (id && message) {
    try {
      await toDoDatabase.editToDo(id, message)
      sendResponse({ res, code: 200 })
    } catch {
      sendResponse({ res, code: 400, error: 'Data was unable to edit' })
    }
  } else sendResponse({ res, code: 400, error: 'Bad Endpoint' })
})

export default ToDoRouter
