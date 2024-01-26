import React from 'react'
import Title from '../components/Title'
import ToDoList from '../components/ToDoList'
import ToDoInput from '../components/ToDoInput'
import styled from 'styled-components'
import Loading from '../components/Loading'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

const ToDoPage = () => {
  return (
    <Container>
      <Title />
      <ToDoList />
      <ToDoInput />
    </Container>
  )
}

export default ToDoPage
