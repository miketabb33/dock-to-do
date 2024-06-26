import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import { ToDoDto } from '../../dto/ToDoDto'
import Icon from './Icon'
import { useToDoContext } from '../contexts/ToDoProvider'
import Input, { useEditToDoInput } from './Input'

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
  index: number
}

const ToDoItem = ({ item, index }: ToDoItemProps) => {
  const { isEditing, toggleEdit, deleteToDo, editToDoInput } =
    useInToDoItem(item)

  return (
    <Container id={`To-Do-Item-${index}`}>
      {isEditing ? (
        <Input id={`Edit-Input-${index}`} {...editToDoInput} />
      ) : (
        <>
          <Text>{item.message}</Text>
          <Button id={`Edit-Button-${index}`} onClick={toggleEdit}>
            <Edit iconName="edit" />
          </Button>
          <Button
            id={`Trash-Button-${index}`}
            onClick={() => deleteToDo(item.id)}
          >
            <Trash iconName="trash" />
          </Button>
        </>
      )}
    </Container>
  )
}

const useInToDoItem = (item: ToDoDto) => {
  const [isEditing, setIsEditing] = useState(false)
  const toggleEdit = () => setIsEditing((prev) => !prev)
  const { deleteToDo } = useToDoContext()
  const editToDoInput = useEditToDoInput(item, toggleEdit)
  return { isEditing, editToDoInput, toggleEdit, deleteToDo }
}

export const NoToDoItem = () => {
  return (
    <Container>
      <Text id="No-To-Do">No To Do's</Text>
    </Container>
  )
}
export default ToDoItem
