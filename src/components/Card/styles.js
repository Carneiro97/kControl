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
`;

export const CardContent = styled.div`
  text-align: -webkit-center;
  padding-top: 30%;
`;

export const CardIconContainer = styled.div`
  margin-top: 15px;
  width: fit-content;
`;
