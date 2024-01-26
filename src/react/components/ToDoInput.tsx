import React from 'react'
import styled from 'styled-components'
import Plus from '../Plus'
import { styles } from '../styles'
import { useLoadingContext } from '../context/LoadingContext'

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

const ToDoInput = () => {
  const { show } = useLoadingContext()
  return (
    <Container>
      <Input />
      <Button onClick={show}>
        <Plus />
      </Button>
    </Container>
  )
}

export default ToDoInput
