import React from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import theme from '../../styles/theme';
import WrapperFlex from '../WrapperFlex';
import { ContainerEmptyContent } from './styles';

export default function LoadingIcon({ marginLeft, marginTop, width, size }) {
  return (
    <WrapperFlex
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      height="100%"
      justifyCenter
      alignCenter
    >
      <ContainerEmptyContent>
        <AiOutlineLoading3Quarters
          size={size || '50'}
          color={theme.secondColor}
        />
      </ContainerEmptyContent>
    </WrapperFlex>
  );
}
