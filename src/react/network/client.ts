import { ToDoDto } from '../../dto/ToDoDto'
import { fetchApi } from './fetchApi'
import { useApi } from './useApi'

export const getToDos = () => {
  return useApi<ToDoDto[]>('/api/todo')
}

type CreateToDoBody = {
  message: string
}

export const createToDo = (createTodoBody: CreateToDoBody) => {
  return fetchApi({
    path: 'api/todo',
    method: 'POST',
    body: createTodoBody,
  })
}

export const deleteToDo = (id: string) => {
  return fetchApi({ path: `/api/todo/${id}/delete`, method: 'DELETE' })
}
