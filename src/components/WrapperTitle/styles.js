import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ noMarginTop }) => (noMarginTop ? 0 : '25px')} 0 15px;

  width: ${({ width }) => (width ? width : '100%')};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'flex-start')};

  ${({ textCenter }) =>
    textCenter
      ? css`
          text-align: center;
        `
      : ''}

  ${({ justifyStart }) =>
    justifyStart
      ? css`
          justify-content: 'flex-start';
        `
      : ''}

  @media (max-width: 768px) {
    margin: ${({ noMarginTop, mobileNoMarginTop }) =>
        noMarginTop || mobileNoMarginTop ? 0 : '17px'}
      0 10px;
  }
`
