import React from 'react';
import { Container } from './styles';

const Card = ({children, onClick, selected}) => (
    <Container 
        onClick={onClick}
        selected={selected}    
    >
        {children}
    </Container>
);

export default Card;
