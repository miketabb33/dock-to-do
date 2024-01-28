import React from 'react'
import styled from 'styled-components'
import { useComponentRequest } from '../network/useApi'
import { ToDoDto } from '../../dto/ToDoDto'
import { styles } from '../styles'
import ToDoItem, { NoToDoItem } from './ToDoItem'

const Container = styled.div`
  background-color: ${styles.gray1};
  border: ${styles.border};
  padding: 1rem;
  border-radius: 3px;
  max-width: 60rem;
  width: 100%;
`

type ToDoListProps = {
  toDoList: ToDoDto[] | null
  refresh: () => void
}

const ToDoList = ({ toDoList, refresh }: ToDoListProps) => {
  const hasNoToDos = (toDoList?.length || 0) < 1
  return (
    <Container>
      {toDoList?.map((item) => (
        <ToDoItem key={item.id} item={item} refresh={refresh} />
      ))}
      {hasNoToDos && <NoToDoItem />}
    </Container>
  )
}

export const useWithToDoList = () => {
  const {
    data: toDoList,
    isLoading: isToDoLoading,
    refresh,
  } = useComponentRequest<ToDoDto[]>('/api/todo')

  return { toDoList, isToDoLoading, refresh: () => refresh({}) }
}

export default ToDoList
