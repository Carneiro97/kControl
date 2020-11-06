import React from 'react'

import { Container } from './styles'

const WrapperSubTitle = ({ children, mobileOnly, ...props }) => (
  <Container mobileOnly={mobileOnly} {...props}>
    {children}
  </Container>
)

export default WrapperSubTitle
