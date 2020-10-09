import styled, { css } from 'styled-components';

import theme from '../../styles/theme';

import Input from '../Input';

export const Container = styled.div`
    display: flex;
    width: 80%;

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

    ${({ width }) =>
        width
            ? css`
                  width: ${width};
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

export const InputSearch = styled(Input).attrs((props) => ({
    value: props.value,
    handleChange: props.onChange,
}))`
    background: ${theme.bgWhite} 0% 0% no-repeat padding-box;
    border: 1px solid ${theme.mainColor};
    border-radius: 5px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    opacity: 1;
    width: 100%;
`;