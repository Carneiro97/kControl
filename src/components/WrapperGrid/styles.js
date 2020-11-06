import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;

  ${({ gap }) =>
    typeof gap === 'number'
      ? css`
          grid-gap: ${gap}px;
        `
      : gap
      ? css`
          grid-gap: 20px;
        `
      : ''}

  ${({ columns, columnWidth }) =>
    columns
      ? css`
          grid-template-columns: ${columns};
        `
      : css`
          grid-template-columns: repeat(auto-fill, minmax(${columnWidth}px, ${columnWidth}px));
        `}

  ${({ rows }) =>
    rows
      ? css`
          grid-template-rows: ${rows};
        `
      : css`
          grid-template-rows: auto;
        `}

  ${({ justifyCenter, justifySpaceBetween, justifyEnd, justifySpaceAround, justifySpaceEvenly }) =>
    justifyCenter
      ? css`
          justify-content: center;
        `
      : justifySpaceBetween
      ? css`
          justify-content: space-between;
        `
      : justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : justifySpaceAround
      ? css`
          justify-content: space-around;
        `
      : justifySpaceEvenly
      ? css`
          justify-content: space-evenly;
        `
      : ''};

  ${({ alignCenter, alignEnd }) =>
    alignCenter
      ? css`
          align-items: center;
        `
      : alignEnd
      ? css`
          align-items: flex-end;
        `
      : ''};
`
