import { ToDoDto } from '../../dto/ToDoDto'
import { fetchApi } from './fetchApi'
import { useApi } from './useApi'

export const getToDos = () => {
  return useApi<ToDoDto[]>('/api/todo')
}

export type ToDoBody = {
  message: string
}

export const createToDoPost = (createTodoBody: ToDoBody) => {
  return fetchApi({ path: 'api/todo', method: 'POST', body: createTodoBody })
}

export const deleteToDoPost = (id: string) => {
  return fetchApi({ path: `/api/todo/${id}/delete`, method: 'DELETE' })
}
