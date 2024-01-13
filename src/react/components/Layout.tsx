import React from 'react'
import styled from 'styled-components'
import { ChildrenProps } from '../types/ChildrenProps'

const Container = styled.div`
  max-width: 120rem;
  margin: 2rem auto;
`

const Layout = ({ children }: ChildrenProps) => {
  return <Container>{children}</Container>
}

export default Layout
