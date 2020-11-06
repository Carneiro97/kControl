import React, { useEffect } from 'react';
import { Container } from './styles';

const Input = ({
  hide,
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
  autoFocus,
  display,
}) => {
  let textInput = null;
  return (
    <Container
      autoFocus={autoFocus}
      hide={hide}
      ref={(inputRef) => {
        textInput = inputRef;
      }}
      display={display}
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
};

export default Input;
