import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

export const ModalContainer = styled.div`
  border-radius: 2px;
  margin: 1rem;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 12;

  ${({ position }) =>
    position
      ? css`
          position: ${position};
        `
      : `  position: fixed;`};

  ${({ left }) =>
    left
      ? css`
          left: ${left}%;
        `
      : ` left: 50%;`};

  ${({ top }) =>
    top
      ? css`
          top: ${top}%;
        `
      : `top: 50%;`};
  /*
    ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight}px;
        `
      : `    max-height: 480px;`};

    ${({ maxWidth }) =>
    maxWidth
      ? css`
          max-width: ${maxWidth}px;
        `
      : `    max-width: 600px;`}; */

  ${({ height }) =>
    height
      ? css`
          height: ${height}px;
        `
      : `height: 473px`};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : `width: 600px`};
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  background-color: #48484826;
  z-index: 1;
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: left;
  padding: 20px;
  letter-spacing: 0.32px;
  font: 600 20px 'unimed_slabregular';
  position: relative;
  color: ${theme.grey410};
  background-color: #ffffff;
  border-radius: 10px 10px 0 0;
  box-shadow: -5px -4px 5px 0px rgba(0, 0, 0, 0.16),
    5px -4px 5px 0px rgba(0, 0, 0, 0.23);

  svg {
    cursor: pointer;
  }

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : `justify-content: space-between`};

  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : `padding: 20px`};
`;

export const ModalContentWrapperContainer = styled.div`
  padding: 20px;
  flex-direction: column;

  min-width: 300px;
  box-shadow: 15px 0px 12px -10px rgba(0, 0, 0, 0.16),
    -10px 0px 12px -10px rgba(0, 0, 0, 0.23);
  background-color: ${theme.white};

  ${({ paddingTop }) =>
    paddingTop
      ? css`
          padding-top: ${paddingTop};
        `
      : ``};

  ${({ minHeight }) =>
    minHeight
      ? css`
          min-height: ${minHeight};
        `
      : css`
          min-height: 200px;
        `};

  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : `display: flex`};

  ${({ height }) =>
    height
      ? css`
          height: ${height};
        `
      : ``};
`;
export const ModalContentContainer = styled.div`
  ${({ overflow }) =>
    overflow
      ? css`
          overflow: ${overflow};
        `
      : css`
          overflow: auto;
        `}
  ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight};
        `
      : css`
          max-height: 350;
        `}
`;

export const ModalFooterContainer = styled.div`
  display: flex;
  border-radius: 0px 0px 10px 10px;
  background-color: ${theme.white};
  box-shadow: -5px 15px 12px 0px rgba(0, 0, 0, 0.16),
    5px 15px 12px 0px rgba(0, 0, 0, 0.23);

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : `justify-content: space-between`};

  * {
    margin: 5px;
  }

  ${({ padding }) =>
    padding
      ? css`
          padding: ${padding};
        `
      : `padding: 20px`};

  ${({ marginBottom }) =>
    marginBottom
      ? css`
          margin-bottom: ${marginBottom};
        `
      : ''};

  ${({ paddingBottom }) =>
    paddingBottom
      ? css`
          padding-bottom: ${paddingBottom};
        `
      : ''};
`;
