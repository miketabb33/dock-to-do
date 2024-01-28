import React from 'react'
import Title from '../components/Title'
import ToDoList from '../components/ToDoList'
import Input, { useAddToDoInput } from '../components/Input'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { useToDoContext } from '../contexts/ToDoProvider'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const AddToDoContainer = styled.div`
  max-width: 40rem;
  width: 100%;
`

const ToDoPage = () => {
  const addToDoInput = useAddToDoInput()
  const { isLoading } = useToDoContext()

  return (
    <Container>
      {isLoading && <Loading />}
      <Title />
      <ToDoList />
      <AddToDoContainer>
        <Input {...addToDoInput} />
      </AddToDoContainer>
    </Container>
  )
}

export default ToDoPage
