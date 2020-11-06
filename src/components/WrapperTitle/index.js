import React from 'react'

import { Container } from './styles'

const WrapperTitle = ({
  children,
  noMarginTop,
  mobileNoMarginTop,
  justifyStart,
  width,
  textCenter,
  alignSelf
}) => (
  <Container
    noMarginTop={noMarginTop}
    mobileNoMarginTop={mobileNoMarginTop}
    justifyStart={justifyStart}
    width={width}
    alignSelf={alignSelf}
    textCenter={textCenter}
  >
    {children}
  </Container>
)

export default WrapperTitle
