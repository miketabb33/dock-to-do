import React from 'react'
import styled from 'styled-components'
import Plus from '../Plus'
import { styles } from '../styles'
import { useAutoLoading } from '../context/LoadingContext'
import { useApi } from '../network/useApi'

const Container = styled.div`
  position: relative;
  max-width: 20rem;
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

type CreateTodo = {
  message: string
}

const ToDoInput = () => {
  const { makeRequest, isLoading } = useApi<null>({
    path: 'api/todo',
    method: 'POST',
  })
  useAutoLoading(isLoading)

  return (
    <Container>
      <Input />
      <Button onClick={() => makeRequest<CreateTodo>({ message: 'thing' })}>
        <Plus />
      </Button>
    </Container>
  )
}

export default ToDoInput
