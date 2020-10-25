import React from 'react';
import { Container } from './styles';

const Input = ({
    marginTop,
    background,
    border,
    borderRadius,
    opacity,
    color,
    font,
    textAlign,
    name,
    type,
    value,
    handleChange = (a) => a,
    width,
    height,
    placeholder,
    disabled,
    margin,
    className,
    lessHover,
}) => (
    <Container
        margin={margin}
        marginTop={marginTop}
        name={name}
        onChange={handleChange}
        value={value}
        type={type}
        border={border}
        background={background}
        borderRadius={borderRadius}
        opacity={opacity}
        color={color}
        font={font}
        textAlign={textAlign}
        width={width}
        height={height}
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        lessHover={lessHover}
    />
);

export default Input;
