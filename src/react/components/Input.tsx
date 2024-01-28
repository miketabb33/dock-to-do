import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import Icon, { IconName } from './Icon'
import { useToDoContext } from '../contexts/ToDoProvider'
import { ToDoDto } from '../../dto/ToDoDto'

const Container = styled.div`
  position: relative;
  width: 100%;
`

const InputWrapper = styled.input`
  border-radius: ${styles.borderRadius};
  border: ${styles.border};
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  width: 100%;
`

const Button = styled.button`
  position: absolute;
  margin: 1px;
  right: 0;
  top: 0;
  height: 95%;
  padding: 1rem;
  background-color: ${styles.green};
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top-right-radius: ${styles.borderRadius};
  border-bottom-right-radius: ${styles.borderRadius};
`

const Plus = styled(Icon)`
  fill: white;
  width: 2rem;
  height: 2rem;
`

type InputProps = {
  value: string
  setValue: (value: string) => void
  onClick: () => void
  iconName: IconName
}

const Input = ({ value, setValue, onClick, iconName }: InputProps) => {
  return (
    <Container>
      <InputWrapper value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={onClick}>
        <Plus iconName={iconName} />
      </Button>
    </Container>
  )
}

export const useEditToDoInput = (
  item: ToDoDto,
  onComplete: () => void
): InputProps => {
  const { updateToDo } = useToDoContext()
  const [value, setValue] = useState(item.message)

  const submitToDo = () => {
    if (value.length >= 3) {
      updateToDo(item.id, { message: value })
      onComplete()
    } else {
      alert('To do needs to be at least 3 characters')
    }
  }

  return {
    value,
    setValue,
    onClick: submitToDo,
    iconName: 'check',
  }
}

export const useAddToDoInput = (): InputProps => {
  const { createToDo } = useToDoContext()
  const [value, setValue] = useState('')

  const submitToDo = () => {
    if (value.length >= 3) {
      setValue('')
      createToDo({ message: value })
    } else {
      alert('To do needs to be at least 3 characters')
    }
  }

  return {
    value,
    setValue,
    onClick: submitToDo,
    iconName: 'plus',
  }
}

export default Input
