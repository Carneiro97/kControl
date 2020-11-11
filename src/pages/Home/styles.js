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
  /* width: 100%; */
  width: 70%;
  display: block;
  border-right: solid;
  border-width: thin;
  border-color: ${theme.mainColor};
  padding: 15px;
`;
export const KitsRows = styled.div`
  overflow: auto;
  max-height: 760px;
`;
export const KitsRow = styled.div`
  /* background-color: green; */
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

export const Side = styled.div``;

export const UsuariosContainer = styled.div`
  padding: 15px;
  border-width: thin;
  border-color: ${theme.mainColor};
  min-height: 497px;
`;
export const EmprestimosContainer = styled.div`
  padding: 15px;
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
  max-height: 650px;
  margin-bottom: 10px;
  min-width: 497px;
  width: 497px;
  min-height: 650px;
`;

export const SideFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
