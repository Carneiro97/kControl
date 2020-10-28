import React, { useState, useContext, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { MdKeyboardArrowDown } from 'react-icons/md';
import DropDownContext from '../../context/DropDownContext';

import useOutsideClick from '../../utils/useOutsideClick';

import {
  Container,
  DropDownWrapper,
  SelectOption,
  OptionContainer,
  DropdownHeader,
} from './styles';

const Dropdown = ({
  text,
  background,
  border,
  borderRadius,
  opacity,
  color,
  font,
  textAlign,
  letterSpacing,
  children,
  onClick,
  maxHeight,
  width,
  invisibleScroll,
}) => {
  const { isOpen } = useContext(DropDownContext);
  return isOpen ? (
    <Container
      border={border}
      background={background}
      borderRadius={borderRadius}
      opacity={opacity}
      color={color}
      font={font}
      textAlign={textAlign}
      text={text}
      letterSpacing={letterSpacing}
      onClick={onClick}
      maxHeight={maxHeight}
      width={width}
      invisibleScroll={invisibleScroll}
    >
      {children}
    </Container>
  ) : null;
};

const Option = ({ name, children, onClick, text, borderRadius, color }) => {
  return (
    <SelectOption
      borderRadius={borderRadius}
      data-text={text}
      onClick={onClick}
      name={name}
      color={color}
    >
      {' '}
      {children} {text}{' '}
    </SelectOption>
  );
};

const DropDownListContainer = ({
  children,
  width,
  borderRadius,
  display,
  minWidth,
}) => {
  const { isOpen } = useContext(DropDownContext);
  return (
    <OptionContainer
      display={isOpen ? display : 'none'}
      borderRadius={borderRadius}
      width={width}
      minWidth={minWidth}
    >
      {children}{' '}
    </OptionContainer>
  );
};
const DropDownHeader = ({
  children,
  name,
  width,
  borderRadius,
  disable,
  color,
  whiteSpace,
  minHeight,
  height,
  cancelActive,
  className,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const { isOpen } = useContext(DropDownContext);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'textContent',
    });
  }, [fieldName, registerField]);

  return (
    <DropdownHeader
      className={className}
      name={name}
      ref={inputRef}
      defaultValue={defaultValue}
      width={width}
      minHeight={minHeight}
      height={height}
      borderRadius={borderRadius}
      disable={disable}
      color={color}
      whiteSpace={whiteSpace}
      active={isOpen && !cancelActive}
      {...rest}
    >
      {children}
      <MdKeyboardArrowDown size="20px" />
    </DropdownHeader>
  );
};
const DropDownContainer = ({
  children,
  disable,
  backgroundColor,
  width,
  borderRadius,
  display,
  marginRight,
  marginLeft,
  border,
  margin,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const toggling = (e) => {
    if (!disable) {
      if (e.target) setIsOpen(!isOpen);
    }
  };
  useOutsideClick(ref, () => setIsOpen(false));
  return (
    <DropDownWrapper
      backgroundColor={backgroundColor}
      ref={ref}
      onClick={toggling}
      width={width}
      borderRadius={borderRadius}
      display={display}
      marginRight={marginRight}
      marginLeft={marginLeft}
      disable={disable}
      border={border}
      margin={margin}
      className={className}
    >
      <DropDownContext.Provider value={{ isOpen }}>
        {children}
      </DropDownContext.Provider>
    </DropDownWrapper>
  );
};

export {
  Dropdown,
  Option,
  DropDownListContainer,
  DropDownHeader,
  DropDownContainer,
};
// text,background,border,borderRadius,opacity,color,font,textAlign,letterSpacing,children,onClick,
Dropdown.propTypes = {
  text: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.bool,
  borderRadius: PropTypes.bool,
  opacity: PropTypes.bool,
  color: PropTypes.bool,
  font: PropTypes.bool,
  textAlign: PropTypes.bool,
  letterSpacing: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Dropdown.defaultProps = {
  text: '',
  background: null,
  border: null,
  borderRadius: null,
  opacity: null,
  color: null,
  font: null,
  textAlign: null,
  letterSpacing: null,
  onClick: (a) => a,
};

Option.propTypes = {
  children: PropTypes.node,
};

Option.defaultProps = {
  children: null,
};

DropDownListContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

DropDownHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
DropDownContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
