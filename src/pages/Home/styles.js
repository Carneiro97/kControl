
import styled from 'styled-components';

import theme from '../../styles/theme'

export const Container = styled.div`
`;
export const HeaderContainer = styled.div`
    text-align: -webkit-center;
`;
export const BodyContainer = styled.div`
    /* background-color: blue; */
    display: flex;
    padding: 0px 10% 0px 10%;
    justify-content: center;
`;
export const KitsContainer = styled.div`
        width: 100%;
        display: block;
`;
export const KitsRow = styled.div`
    /* background-color: green; */
    height: fit-content;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    border-left: solid;
    border-right: solid;
    border-width: thin;
    border-color: blue
`;

export const SideContainer = styled.div`
    /* background-color: purple; */
    height: 600px;
    width: 35%;
    padding: 15px;
    border-right: solid;
    border-width: thin;
    border-color:  ${theme.mainColor};
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
`;

export const SideFooter = styled.div`
    text-align: end;
`;