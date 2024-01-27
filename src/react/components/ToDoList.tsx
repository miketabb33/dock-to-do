import React from 'react'
import styled from 'styled-components'
import { useComponentRequest } from '../network/useApi'
import { ToDoDto } from '../../dto/ToDoDto'
import { styles } from '../styles'

const Container = styled.div`
  background-color: ${styles.gray1};
  border: ${styles.border};
  padding: 1rem;
  border-radius: 3px;
  max-width: 60rem;
  width: 100%;
`

const List = styled.div`
  :not(:last-child) {
    border-bottom: ${styles.border};
  }
`

const Item = styled.p`
  font-size: 2rem;
  padding: 1rem;
  text-transform: capitalize;
`

type ToDoListProps = {
  toDoList: ToDoDto[] | null
}

const ToDoList = ({ toDoList }: ToDoListProps) => {
  return (
    <Container>
      <List>
        {toDoList?.map((item) => (
          <Item key={item.id}>{item.message}</Item>
        ))}
      </List>
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
