import React from 'react'

import { Container, Helper } from './styles'

const WrapperProducts = ({
  children,
  overflow,
  rowHeight,
  justifySpaceBetween,
  customWidth,
  dummies = 20,
  ...props
}) => (
  <>
    <Container
      {...props}
      customWidth={customWidth}
      overflow={overflow}
      rowHeight={rowHeight}
      justifySpaceBetween={justifySpaceBetween}
    >
      {children}
      {Array(dummies).fill(<Helper customWidth={customWidth} />)}
    </Container>
  </>
)

export default WrapperProducts
