import React, { createContext, useContext, useState } from 'react'
import { ToDoDto } from '../../dto/ToDoDto'
import { ChildrenProps } from '../types/ChildrenProps'
import {
  CreateToDoBody,
  createToDoPost,
  deleteToDoPost,
  getToDos,
} from '../network/client'

type ToDoContextValue = {
  toDoList: ToDoDto[] | null
  hasNoToDos: boolean
  isLoading: boolean
  deleteToDo: (id: string) => void
  createToDo: (body: CreateToDoBody) => void
}

const ToDoContext = createContext<ToDoContextValue>({
  toDoList: [],
  hasNoToDos: false,
  isLoading: false,
  deleteToDo: () => {},
  createToDo: () => {},
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

  const createToDo = (body: CreateToDoBody) => {
    setIsActionLoading(true)
    createToDoPost(body).finally(() => {
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
