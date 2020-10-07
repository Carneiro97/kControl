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
    handleInputKeyDown = (a) => a,
    handleClick = (a) => a,
    width,
    height,
    placeholder,
    disabled,
    margin,
    className,
}) => (
    <Container
        margin={margin}
        marginTop={marginTop}
        name={name}
        onChange={(event) => {
            event.stopPropagation();
            handleChange(event);
        }}
        onKeyDown={(event) => {
            event.stopPropagation();
            handleInputKeyDown(event);
        }}
        onClick={(event) => {
            event.stopPropagation();
            handleClick(event);
        }}
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
    />
);

export default Input;
