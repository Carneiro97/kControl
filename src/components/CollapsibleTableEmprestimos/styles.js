import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const ObsButton = styled.div`
  &:hover {
    color: ${theme.mainColor};
    cursor: pointer;
  }
`;
