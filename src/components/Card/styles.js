import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

export const Container = styled.div`
  /* background-color: purple; */
  height: 200px;
  width: 200px;
  border-radius: 30px;
  margin-left: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ridge;
  color: ${theme.mainColor};
  border-width: thin;
  font: 20px Calibri Regular;
  border-color: ${theme.mainColor};


  &:hover {
    border-width: medium;
    border-color: ${theme.secondColor};
    font-weight: bold;
    cursor: pointer;
    background-color: ${theme.red100};
  }
`;
