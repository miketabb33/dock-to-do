import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import ToDoItem, { NoToDoItem } from './ToDoItem'
import { useToDoContext } from '../contexts/ToDoProvider'

const Container = styled.div`
  background-color: ${styles.gray1};
  border: ${styles.border};
  padding: 1rem;
  border-radius: 3px;
  max-width: 60rem;
  width: 100%;
`

const ToDoList = () => {
  const { toDoList, hasNoToDos } = useToDoContext()
  return (
    <Container>
      {toDoList?.map((item) => (
        <ToDoItem key={item.id} item={item} />
      ))}
      {hasNoToDos && <NoToDoItem />}
    </Container>
  )
}

export default ToDoList
