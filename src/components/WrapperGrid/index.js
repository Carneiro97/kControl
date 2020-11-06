import React from 'react'

import { Container } from './styles'

const WrapperGrid = ({
  gap,
  columns,
  columnWidth,
  rows,
  justifyCenter,
  justifySpaceBetween,
  justifyEnd,
  justifySpaceAround,
  justifySpaceEvenly,
  alignCenter,
  alignEnd,
  children,
  ...props
}) => (
  <Container
    {...props}
    gap={gap}
    columns={columns}
    columnWidth={columnWidth}
    rows={rows}
    justifyCenter={justifyCenter}
    justifySpaceBetween={justifySpaceBetween}
    justifyEnd={justifyEnd}
    justifySpaceAround={justifySpaceAround}
    justifySpaceEvenly={justifySpaceEvenly}
    alignCenter={alignCenter}
    alignEnd={alignEnd}
  >
    {children}
  </Container>
)

export default WrapperGrid
