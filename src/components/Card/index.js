import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import {
  Container,
  CardContent,
  CardIconContainer,
  CardDeleteIconContainer,
} from './styles';

import theme from '../../styles/theme';

const Card = ({
  onClick,
  selected,
  title,
  onClickInfo,
  onClickDelete,
  emprestado,
}) => (
  <Container disabled={emprestado} onClick={onClick} selected={selected}>
    <CardContent>
      <CardDeleteIconContainer emprestado={emprestado}>
        <MdDeleteForever
          color={emprestado ? theme.grey : theme.secondColor}
          title={'Deletar kit'}
          onClick={emprestado ? null : onClickDelete}
        />
      </CardDeleteIconContainer>
      {title}
      <CardIconContainer>
        <BsInfoCircle
          color={theme.mainColor}
          title={'Ver mais...'}
          onClick={onClickInfo}
        />
      </CardIconContainer>
    </CardContent>
  </Container>
);

export default Card;
