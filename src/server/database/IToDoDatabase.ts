import { ToDoDto } from '../../dto/ToDoDto'

export interface IToDoDatabase {
  getToDos: () => Promise<ToDoDto[]>
  createToDo: (message: string) => Promise<void>
  deleteToDo: (id: string) => Promise<void>
  editToDo: (id: string, message: string) => Promise<void>
}
