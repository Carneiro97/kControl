import React from 'react';

import { RiErrorWarningLine } from 'react-icons/ri';
import Button from '../Button';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../Modal';

import theme from '../../styles/theme';

import { Container, ContentText, TextTitle } from './styles';

function ModalCancelAction({
  isOpen,
  onClick,
  onClickOk,
  text,
  textHeader,
  textTitle,
}) {
  return (
    <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
      <ModalHeader padding="10px">{textHeader}</ModalHeader>
      <ModalContentWrapper paddingTop="14px">
        <ModalContent>
          <Container>
            <RiErrorWarningLine color={theme.yellow} size="100" />
            <TextTitle text={textTitle} />
            <ContentText>{text}</ContentText>
          </Container>
        </ModalContent>
      </ModalContentWrapper>
      <ModalFooter>
        <Button
          onClick={onClick}
          text="cancelar"
          marginRight="14px"
          type="button"
          justifyCenter
          alignCenter
          width="121"
        />
        <Button
          onClick={onClickOk}
          text="confirmar"
          marginLeft="14px"
          type="button"
          justifyCenter
          alignCenter
          width="121"
        />
      </ModalFooter>
    </Modal>
  );
}

export default ModalCancelAction;
