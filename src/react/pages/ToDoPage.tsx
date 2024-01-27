import React from 'react'
import Title from '../components/Title'
import ToDoList, { useWithToDoList } from '../components/ToDoList'
import ToDoInput, { useWithToDoInput } from '../components/ToDoInput'
import styled from 'styled-components'
import Loading from '../components/Loading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const ToDoPage = () => {
  const { refresh, toDoList, isToDoLoading } = useWithToDoList()
  const { inputBind, isPostLoading } = useWithToDoInput(refresh)
  const isLoading = isPostLoading || isToDoLoading

  return (
    <Container>
      {isLoading && <Loading />}
      <Title />
      <ToDoList toDoList={toDoList} />
      <ToDoInput {...inputBind} />
    </Container>
  )
}

export default ToDoPage
