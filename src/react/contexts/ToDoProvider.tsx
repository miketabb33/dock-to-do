import React, { createContext, useContext, useState } from 'react'
import { ToDoDto } from '../../dto/ToDoDto'
import { ChildrenProps } from '../types/ChildrenProps'
import {
  ToDoBody,
  createToDoPost,
  deleteToDoPost,
  getToDos,
  updateToDoPut,
} from '../network/client'

type ToDoContextValue = {
  toDoList: ToDoDto[] | null
  hasNoToDos: boolean
  isLoading: boolean
  deleteToDo: (id: string) => void
  createToDo: (body: ToDoBody) => void
  updateToDo: (id: string, body: ToDoBody) => void
}

const ToDoContext = createContext<ToDoContextValue>({
  toDoList: [],
  hasNoToDos: false,
  isLoading: false,
  deleteToDo: () => {},
  createToDo: () => {},
  updateToDo: () => {},
})

const ToDoContextProvider = ({ children }: ChildrenProps) => {
  const [isActionLoading, setIsActionLoading] = useState(false)
  const { data: toDoList, isLoading: isGetLoading, refresh } = getToDos()
  const hasNoToDos = !isGetLoading && (toDoList?.length || 0) < 1

  const deleteToDo = (id: string) => {
    setIsActionLoading(true)
    deleteToDoPost(id).finally(() => {
      setIsActionLoading(false)
      refresh()
    })
  }

  const createToDo = (body: ToDoBody) => {
    setIsActionLoading(true)
    createToDoPost(body).finally(() => {
      setIsActionLoading(false)
      refresh()
    })
  }

  const updateToDo = (id: string, body: ToDoBody) => {
    setIsActionLoading(true)
    updateToDoPut(id, body).finally(() => {
      setIsActionLoading(false)
      refresh()
    })
  }

  return (
    <ToDoContext.Provider
      value={{
        toDoList,
        hasNoToDos,
        isLoading: isGetLoading || isActionLoading,
        deleteToDo,
        createToDo,
        updateToDo,
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}

export default ToDoContextProvider

export const useToDoContext = () => {
  return useContext(ToDoContext)
}
