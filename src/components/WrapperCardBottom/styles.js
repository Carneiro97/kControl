import styled, { css } from 'styled-components'

import theme from '../../../styles/theme'

export const Container = styled.div`
  ${({ mobileOnly }) =>
    mobileOnly
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};

  width: 100%;
  padding: 0 55px 15px;

  span {
    display: inline-block;
    font-size: 12px;
    font-weight: ${theme.fontSemibold};
    margin: 8px 0;
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    ${({ desktopOnly, mobileOnly }) =>
      desktopOnly
        ? css`
            display: none;
          `
        : mobileOnly
        ? css`
            display: flex;
          `
        : ''};

    padding: 0 16px 10px;
  }
`
