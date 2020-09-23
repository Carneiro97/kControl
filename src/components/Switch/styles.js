import styled, { css } from 'styled-components';

export const Container = styled.div`

    ${({ marginLeft }) =>
        marginLeft
      ? css`
          margin-left: ${marginLeft};
        `
      : ''}

${({ marginRight }) =>
        marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ''}
`;