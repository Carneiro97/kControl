import styled from 'styled-components';

import { Text } from '../Text';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const ContentText = styled.div`
  &:first-letter {
    text-transform: capitalize;
  }
  font: 20px 'unimed_slabregular';
  color: #60656c;
  margin-top: 25px;
  margin-bottom: 31px;
  align-self: center;

  strong {
    font: bold 16px Calibri;
  }

  a,
  a:hover {
    font: bold 16px Calibri;
    color: #8bac2a;
    text-decoration: none;
  }
`;

export const TextTitle = styled(Text)`
  margin: 20px 0 16px 0;
  font: 600 34px 'unimed_slabregular';
  letter-spacing: 0px;
  color: #5a5a5a;
  opacity: 1;
  text-align: center;
`;

export const ButtonFooter = styled(Button)`
  width: 121px;
  height: 40px;
`;
