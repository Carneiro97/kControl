import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content:${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : `space-between`};

  align-items:center;
  width: 100%;
  padding: 0 55px;

    ${({ paddingSides }) =>
      paddingSides
        ? css`
            padding: 0 ${paddingSides}px;
          `
        : css`
            padding: 0 55px;
          `}

  ${({ medium, small }) =>
    medium
      ? css`
          height: 112px;
        `
      : small
      ? css`
          height: 60px;
        `
      : css`
          height: 95px;
        `}

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: 20px;
        `
      : ''}

${({ alignItems }) =>
  alignItems
    ? css`
        align-items: ${alignItems};
      `
    : ''}

  ${({ flexDirection }) => (flexDirection ? `flex-direction:${flexDirection};` : ``)}

  ${({ height }) => (height ? `height:${height}px;` : ``)}

  ${({ minWidth }) => (minWidth ? `width:${minWidth}px;` : ``)}

  ${({ noPaddingLeft }) =>
    noPaddingLeft
      ? css`
          padding-left: 0;
        `
      : ''}

  ${({ noPaddingRight }) =>
    noPaddingRight
      ? css`
          padding-right: 0;
        `
      : ''}

  ${({ noHeight }) =>
    noHeight
      ? css`
          height: unset;
        `
      : ''}

  @media (max-width: 768px) {
    ${({ medium }) =>
      medium
        ? css`
            height: 95px;
          `
        : css`
            height: 60px;
          `}

    ${({ mobileFullSize }) =>
      mobileFullSize
        ? css`
            padding: 0;
          `
        : css`
            padding: 0 16px;
          `}

    ${({ noHeight }) =>
      noHeight
        ? css`
            height: unset;
          `
        : ''}
  }
`
