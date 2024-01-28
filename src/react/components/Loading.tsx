import React from 'react'
import styled from 'styled-components'
import { styles } from '../styles'

const Spinner = styled.div`
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: mulShdSpin 1.1s infinite ease;
  transform: translateZ(0);

  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em #ffffff,
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
        1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff,
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff,
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
        -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
        1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
        0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
        -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
        -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
    }
  }
`

const Backdrop = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`

const Container = styled.div`
  background-color: ${styles.gray3};
  border: ${styles.border};
  border-radius: ${styles.borderRadius};
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
  return (
    <Backdrop>
      <Container>
        <Spinner />
      </Container>
    </Backdrop>
  )
}
export default Loading
