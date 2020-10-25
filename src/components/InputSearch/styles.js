import styled, { css } from 'styled-components';

import theme from '../../styles/theme';


export const Container = styled.div`
    display: flex;


    ${({ width }) =>
      width
          ? css`
                width: ${width};
            `
          : css`
                width: 100%};
             `
    }
  }

    ${({ marginTop }) =>
        marginTop
            ? css`
                  margin-top: ${marginTop};
              `
            : ''}

    ${({ margin }) =>
        margin
            ? css`
                  margin: ${margin};
              `
            : ''}


    ${({ padding }) =>
        padding
            ? css`
                  padding: ${padding};
              `
            : ''}


    ${({ justifyContent }) =>
        justifyContent
            ? css`
                  justify-content: ${justifyContent};
              `
            : ''}
`;

export const SearchIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 49px;
    border: 1px solid ${theme.mainColor};
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
`;