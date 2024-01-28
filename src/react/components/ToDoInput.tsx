import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '../styles'
import { useApi } from '../network/useApi'
import Icon from './Icon'

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
  background-color: #198754;
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

type CreateTodo = {
  message: string
}

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
  const [input, setInput] = useState('')

  const { makeRequest, isLoading } = useApi<null>({
    path: 'api/todo',
    method: 'POST',
  })

  const onClick = () => {
    if (input.length >= 3) {
      makeRequest<CreateTodo>({ body: { message: input }, onComplete })
      setInput('')
    } else {
      alert('To do needs to be at least 3 characters')
    }
  }

  return {
    isPostLoading: isLoading,
    inputBind: {
      input,
      setInput,
      onClick,
    },
  }
}

export default ToDoInput
