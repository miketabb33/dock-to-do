import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import Icon from './Icon'
import { createToDo } from '../network/client'

const Container = styled.div`
  position: relative;
  max-width: 30rem;
  width: 100%;
  overflow: hidden;
`

const Input = styled.input`
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

type ToDoInputProps = {
  input: string
  setInput: (value: string) => void
  onClick: () => void
}

const ToDoInput = ({ input, setInput, onClick }: ToDoInputProps) => {
  return (
    <Container>
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={onClick}>
        <Plus iconName="plus" />
      </Button>
    </Container>
  )
}

export const useWithToDoInput = (onComplete: () => void) => {
  const [value, setValue] = useState('')

  const submitToDo = () => {
    if (value.length >= 3) {
      createToDo({ message: value })
      setValue('')
      onComplete()
    } else {
      alert('To do needs to be at least 3 characters')
    }
  }

  return {
    inputBind: {
      input: value,
      setInput: setValue,
      onClick: submitToDo,
    },
  }
}

export default ToDoInput
