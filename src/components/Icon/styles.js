import styled, { css } from 'styled-components';

import theme from '../../../styles/theme';

export const Container = styled.svg`
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : ''}

  ${({ icon }) =>
    icon
      ? css`
          icon: ${icon};
        `
      : ''}
    ${({ marginLeft }) =>
    marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}
    ${({ cursor }) =>
    cursor
      ? css`
          cursor: ${cursor};
        `
      : ''}

${({ margin }) =>
    margin
      ? css`
          margin: ${margin};
        `
      : ''}
`;
