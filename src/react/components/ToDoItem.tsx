import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import { ToDoDto } from '../../dto/ToDoDto'
import Icon from './Icon'
import { deleteToDo } from '../network/client'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  &:not(:last-child) {
    border-bottom: ${styles.border};
  }
`

const Text = styled.p`
  font-size: 2rem;
  padding: 1rem;
  text-transform: capitalize;
  margin-right: auto;
`

const Trash = styled(Icon)`
  fill: ${styles.red};
  height: 2rem;
  width: 2rem;
`

const Edit = styled(Icon)`
  fill: ${styles.teal};
  height: 2rem;
  width: 2rem;
`

const Button = styled.button`
  padding: 0.5rem;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: ${styles.borderRadius};
  transition: all 0.2s;

  &:hover {
    background-color: white;
    transform: scale(1.2);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  }
`

type ToDoItemProps = {
  item: ToDoDto
  refresh: () => void
}

const ToDoItem = ({ item, refresh }: ToDoItemProps) => {
  const deleteItem = () => {
    deleteToDo(item.id).finally(refresh)
  }

  return (
    <Container>
      <Text>{item.message}</Text>
      <Button>
        <Edit iconName="edit" />
      </Button>
      <Button onClick={deleteItem}>
        <Trash iconName="trash" />
      </Button>
    </Container>
  )
}

export const NoToDoItem = () => {
  return (
    <Container>
      <Text>No To Do's</Text>
    </Container>
  )
}
export default ToDoItem
