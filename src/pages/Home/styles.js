import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  padding: 0 2% 0 2%;
`;
export const HeaderContainer = styled.div`
  text-align: -webkit-center;
`;
export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  border-left: solid;
  border-right: solid;
  border-width: thin;
  border-color: ${theme.mainColor};
`;

export const KitsHeader = styled.div`
  padding: 5px;
  text-align: center;
  color: ${theme.white};
  font: 20px Calibri Regular;
  border: ${theme.mainColor} solid;
  border-radius: 5px;
  border-width: thin;
  background-color: ${theme.mainColor};
`;

export const KitsContainer = styled.div`
  width: 55%;
  display: block;
  border-right: solid;
  border-width: thin;
  border-color: ${theme.mainColor};
  padding: 15px;
`;
export const KitsRows = styled.div`
  overflow: auto;
  max-height: 400px;
`;
export const KitsRow = styled.div`
  height: fit-content;
  padding: 30px;
  display: flex;

  ${({ justifyContent }) =>
    justifyContent
      ? css`
          justify-content: ${justifyContent};
        `
      : css`
          justify-content: space-evenly;
        `}
`;

export const Side = styled.div`
  padding: 15px;
`;

export const UsuariosContainer = styled.div`
  border-width: thin;
  border-color: ${theme.mainColor};
  height: 350px;
`;
export const EmprestimosContainer = styled.div`
  border-width: thin;
  border-color: ${theme.mainColor};
`;
export const SideHeader = styled.div`
  padding: 5px;
  text-align: center;
  color: ${theme.white};
  font: 20px Calibri Regular;
  border: ${theme.mainColor} solid;
  border-radius: 5px;
  border-width: thin;
  background-color: ${theme.mainColor};
`;
export const SideBody = styled.div`
  height: 90%;
  overflow: auto;
  height: 350px;
  margin-bottom: 10px;
`;

export const SideFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
