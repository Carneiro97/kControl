import React from 'react';

import iconPath from '../../../assets/icons/iconsLib';

import BsShieldLock from 'react-icons/bs';

import { Container } from './styles';

const Icon = ({
  size,
  color,
  icon,
  style,
  marginLeft,
  onClick,
  cursor,
  backgroundColor,
  margin,
}) => (
  <Container
    style={style}
    width={`${size}`}
    height={`${size}`}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    marginLeft={marginLeft}
    onClick={onClick}
    cursor={cursor}
    margin={margin}
  >
    <path fill={color} d={iconPath[icon]} />
  </Container>
);

export default Icon;
