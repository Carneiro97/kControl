import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px -10px;
  padding: 0 10px;
  justify-content: space-evenly;

  ${({ overflow }) =>
    overflow
      ? css`
          overflow: hidden;
          height: 188px;
        `
      : ''}

  ${({ justifySpaceBetween }) =>
    justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : ''}

  @media (max-width: 768px) {
    ${({ overflow }) =>
      overflow
        ? css`
            height: 110px;
          `
        : ''}
  }
`

export const Helper = styled.div`
  height: 0;
  ${({ customWidth }) =>
    customWidth
      ? css`
          width: ${customWidth}px;
        `
      : 'width: 266px;'}

  @media (max-width: 768px) {
    ${({ customWidth }) =>
      customWidth
        ? css`
            width: ${customWidth}px;
          `
        : 'width: 166px;'}
  }
`
