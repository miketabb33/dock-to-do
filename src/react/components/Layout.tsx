import React from 'react'
import styled from 'styled-components'
import { ChildrenProps } from '../types/ChildrenProps'
import { useLoadingContext } from '../context/LoadingContext'
import Loading from './Loading'

const Container = styled.div`
  max-width: 120rem;
  margin: 2rem auto;
  padding: 0 1rem;
`

const Layout = ({ children }: ChildrenProps) => {
  const { isShowing } = useLoadingContext()
  return (
    <Container>
      {isShowing && <Loading />}
      {children}
    </Container>
  )
}

export default Layout
