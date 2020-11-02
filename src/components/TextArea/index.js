import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

const TextArea = ({
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
}) => {

    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container
            ref={inputRef}
            defaultValue={defaultValue}
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
    )
}

export default TextArea;
