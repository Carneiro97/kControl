import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import {
  Container,
  CardHeader,
  CardContent,
  CardIconContainer,
  CardDeleteIconContainer,
} from './styles';

import theme from '../../styles/theme';
import PerfilUsuarioEnum from '../../enums/PerfilUsuarioEnum';

const Card = ({
  onClick,
  selected,
  title,
  onClickInfo,
  onClickDelete,
  status,
  disableDelete,
  usuarioLogado,
}) => (
  <Container status={status} onClick={onClick} selected={selected}>
    <CardHeader>
      <CardDeleteIconContainer disableCursor={status === 'Emprestado'}>
        <MdDeleteForever
          color={disableDelete ? theme.grey : theme.secondColor}
          title={'Excluir kit'}
          onClick={disableDelete ? null : onClickDelete}
          display={
            PerfilUsuarioEnum.returnName[usuarioLogado?.perfil] !==
            'Administrador'
              ? 'none'
              : null
          }
        />
      </CardDeleteIconContainer>
    </CardHeader>
    <CardContent>
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
