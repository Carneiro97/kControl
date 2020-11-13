import styled, { css } from 'styled-components';

export const Container = styled.label`
  text-align: left;
  font: 300 15px Calibri;
  letter-spacing: 0.52px;

  opacity: 1;

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ``};

  ${({ margin }) =>
    margin
      ? css`
          margin: ${margin}px;
        `
      : ``};

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight}px;
        `
      : ``};

  ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : `max-height: 200px;`};

  ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ``};

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ''}

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom}px;
        `
      : ``};
`;
