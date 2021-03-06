import React from 'react'

import { Container, Helper } from './styles'

const WrapperButton = ({ children, overflow, justifySpaceBetween, customWidth }) => (
  <>
    <Container
      customWidth={customWidth}
      overflow={overflow}
      justifySpaceBetween={justifySpaceBetween}
    >
      {children}
      {Array(20).fill(<Helper customWidth={customWidth} />)}
    </Container>
  </>
)

export default WrapperButton
