import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const NavContainer = styled.div`

  background-color: ${theme.mainColor};
  font-family: "Lato", sans-serif;
  justify-content: space-between;

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

export const TitleContainer = styled.div`

  color: ${theme.white};
  font-size: x-large;

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

export const UserContainer = styled.div`

  color: ${theme.white};
  font-size: larger;
  display: flex;
`;

export const IconContainer = styled.div`
`;
export const UserText = styled.div`
  margin-left: 15px;
  padding-top: 1px;
`;

export const LogoutContainer = styled.div`

  color: ${theme.white};
  font-size: larger;
  &:hover{
    cursor: pointer;
    color: red;
  }

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

export const LogoutText = styled.a`

  color: ${theme.white};
  text-decoration: none;
  margin-right: 10px;

  &:hover{
    text-decoration: none;
    color: ${theme.white};
  }

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