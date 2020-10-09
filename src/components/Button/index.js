import React from 'react';

import { Container } from './styles';

const Button = ({
    border,
    borderRadius,
    opacity,
    text,
    font,
    color,
    onClick,
    children,
    height,
    width,
    background,
    marginRight,
    marginLeft,
    type,
    ...props
}) => (
    <Container
        {...props}
        border={border}
        borderRadius={borderRadius}
        opacity={opacity}
        text={text}
        font={font}
        color={color}
        height={height}
        width={width}
        background={background}
        marginRight={marginRight}
        marginLeft={marginLeft}
        onClick={onClick}
        type={type}
    >
        {children}
        {text}
    </Container>
);

export default Button;
