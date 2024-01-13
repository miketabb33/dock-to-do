import React from 'react'
import styled from 'styled-components'
import { useAsync } from '../network/useAuthRequest'
import { ToDoDto } from '../../dto/ToDoDto'

const Container = styled.div`
  background-color: #eee;
  border: 1px solid #bbb;
  padding: 1rem;
  border-radius: 3px;
  max-width: 60rem;
  margin: auto;
`

const List = styled.div`
  :not(:last-child) {
    border-bottom: 1px solid #bbb;
  }
`

const Item = styled.p`
  font-size: 2rem;
  padding: 1rem;
  text-transform: capitalize;
`

const ToDoList = () => {
  const { data: toDoList } = useAsync<ToDoDto[]>()
  return (
    <Container>
      <List>
        {toDoList?.map((item) => (
          <Item key={item.id}>{item.message}</Item>
        ))}
      </List>
    </Container>
  )
}

export default ToDoList
