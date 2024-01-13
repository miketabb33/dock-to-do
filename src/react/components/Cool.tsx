import React from 'react'
import styled from 'styled-components'

const S = styled.div`
  background-color: #eee;
  border: 1px solid #bbb;
  padding: 3rem;
  border-radius: 3rem;
`

const Container = styled.div`
  max-width: 80rem;
  margin: auto;
`

const Cool = () => {
  return (
    <Container>
      <h1>To Do</h1>
      <S>Cool Stuff</S>
    </Container>
  )
}

export default Cool
