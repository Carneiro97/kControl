import React from 'react'

import { Container } from './styles'

const WrapperCardMiddle = ({
  children,
  paddingSides,
  mobileFullSize,
  noPaddingLeft,
  alignItems,
  noPaddingRight,
  marginBottom,
  justifyContent,
  medium,
  noHeight,
  height,
  minWidth,
  flexDirection,
  ...props
}) => (
  <Container
    {...props}
    alignItems={alignItems}
    minWidth={minWidth}
    paddingSides={paddingSides}
    flexDirection={flexDirection}
    mobileFullSize={mobileFullSize}
    noPaddingLeft={noPaddingLeft}
    noPaddingRight={noPaddingRight}
    justifyContent={justifyContent}
    medium={medium}
    noHeight={noHeight}
    height={height}
    marginBottom={marginBottom}
  >
    {children}
  </Container>
)

export default WrapperCardMiddle
