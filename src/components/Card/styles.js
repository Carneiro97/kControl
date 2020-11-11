import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 30px;
  margin-left: 22px;
  border: ridge;
  color: ${theme.mainColor};
  border-width: thin;
  font: 20px Calibri Regular;
  border-color: ${theme.mainColor};
  text-align: center;

  ${({ status }) =>
    status === 'Disponível'
      ? css`
          &:hover {
            border-width: medium;
            border-color: ${theme.secondColor};
            font-weight: bold;
            cursor: pointer;
            background-color: ${theme.red100};
          }

          &:active {
            color: ${theme.secondColor};
          }
        `
      : status === 'Emprestado'
      ? css`
          cursor: default;
          color: ${theme.mainColor};
          border-color: ${theme.mainColor};
          background-color: ${theme.mainColorLight};
        `
      : status === 'Em manutenção'
      ? css`
          cursor: default;
          color: ${theme.secondColor};
          border-color: ${theme.secondColor};
          background-color: ${theme.greyDisable};
        `
      : ``};

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${theme.red100};
          border-color: ${theme.mainColor};
          color: ${theme.mainColor};
          border-width: medium;
          font-weight: bold;
        `
      : ''};
`;

export const CardHeader = styled.div`
  text-align: -webkit-right;
`;

export const CardContent = styled.div`
  text-align: -webkit-center;
`;

export const CardIconContainer = styled.div`
  margin-top: 15px;
  width: fit-content;
  cursor: pointer;
`;

export const CardDeleteIconContainer = styled.div`
  width: fit-content;
  margin-bottom: 15%;
  text-align: end;
  padding: 5%;

  ${({ disableCursor }) =>
    !disableCursor
      ? css`
          cursor: pointer;
        `
      : ``};
`;
