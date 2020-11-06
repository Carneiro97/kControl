import React from 'react'

import { Container } from './styles'

const WrapperCardBottom = ({ desktopOnly, mobileOnly, children }) => (
  <Container desktopOnly={desktopOnly} mobileOnly={mobileOnly}>
    {children}
  </Container>
)

export default WrapperCardBottom
