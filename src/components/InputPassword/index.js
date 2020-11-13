import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { RiErrorWarningLine } from 'react-icons/ri';
import { BiCheckCircle } from 'react-icons/bi';
import { IconEye, Container, ErrorMessage, IconValidation } from './styles';
import theme from '../../styles/theme';

import { ReactComponent as Eye } from '../../assets/icons/visibility-24px.svg';
import { ReactComponent as EyeOff } from '../../assets/icons/visibility_off-24px.svg';

import LabelContainer from '../LabelContainer';

export default function InputPassword({
  name,
  value,
  placeholder,
  onClick,
  labelName,
  disabled,
  marginTop,
  marginLeft,
  marginBottom,
  width,
  height,
  isLogin,
  background,
  border,
  borderRadius,
  opacity,
  color,
  font,
  textAlign,
  type,
  handleChange = (a) => a,
  handleClick = (a) => a,
  handleInputKeyDown = (a) => a,
  handleInputOnBlur = (a) => a,
  margin,
  errorSenha,
  display,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <LabelContainer
        marginTop={marginTop || '20'}
        text={labelName}
        margin="0"
        marginBottom={marginBottom || '0'}
        marginLeft={marginLeft || '0'}
        display={display}
      >
        <Container
          ref={inputRef}
          margin={margin}
          name={name}
          onChange={(event) => {
            event.stopPropagation();
            handleChange(event);
          }}
          onKeyDown={(event) => {
            event.stopPropagation();
            handleInputKeyDown(event);
          }}
          onBlur={(event) => {
            event.stopPropagation();
            handleInputOnBlur(event);
          }}
          onClick={(event) => {
            event.stopPropagation();
            handleClick(event);
          }}
          value={value}
          type={values.showPassword ? 'text' : 'password'}
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
          isTyping={!!value}
          errorSenha={errorSenha}
        />
        <IconEye
          height="20px"
          onClick={handleClickShowPassword}
          isLogin={isLogin}
        >
          {values.showPassword ? (
            <Eye color={theme.grey} />
          ) : (
            <EyeOff color={theme.grey} />
          )}
        </IconEye>
        {error ? (
          <>
            <IconValidation height="20px" showIconError={error}>
              <RiErrorWarningLine size="24" />
            </IconValidation>
            <ErrorMessage>{error}</ErrorMessage>
          </>
        ) : (
          <IconValidation height="20px" showIconError={error}>
            <BiCheckCircle size="24" />
          </IconValidation>
        )}
      </LabelContainer>
    </>
  );
}
