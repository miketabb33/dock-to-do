import { ToDoDto } from '../../dto/ToDoDto'
import { uuid } from '../../uuid'
import { IToDoDatabase } from './IToDoDatabase'

export class InMemoryToDoDatabase implements IToDoDatabase {
  items: ToDoDto[] = []

  getToDos = async (): Promise<ToDoDto[]> => {
    return this.items
  }

  createToDo = async (message: string) => {
    const now = new Date()
    const newItem: ToDoDto = {
      id: uuid(),
      message,
      created_on: now.toISOString(),
    }
    this.items.push(newItem)
  }

  deleteToDo = async (id: string) => {
    const index = this.items.findIndex((x) => x.id === id)
    this.items.splice(index, 1)
  }

  editToDo = async (id: string, message: string) => {
    const index = this.items.findIndex((x) => x.id === id)
    this.items[index].message = message
  }
}
