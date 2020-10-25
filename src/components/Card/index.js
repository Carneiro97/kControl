import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { Container, CardContent, CardIconContainer } from './styles';

import theme from '../../styles/theme'

const Card = ({onClick, selected, title, onClickInfo}) => (
    <Container 
        onClick={onClick}
        selected={selected}    
    >
        <CardContent>
            {title}
            <CardIconContainer>
                <BsInfoCircle color={theme.mainColor} title={"Ver mais..."} onClick={onClickInfo} />
            </CardIconContainer>
        </CardContent>
    </Container>
);

export default Card;
