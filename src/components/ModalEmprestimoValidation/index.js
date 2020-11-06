import React from 'react';

import Input from '../Input';
import LoadingIcon from '../../components/LoadingIcon';
import Button from '../Button';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../Modal';

import { Form } from '@unform/web';

import theme from '../../styles/theme';

import { Container, ContentText, TextTitle } from './styles';

function ModalEmprestimoValidation({
  isOpen,
  onClick,
  text,
  textHeader,
  textTitle,
  onChangeInput,
  onSubmit,
}) {
  return (
    <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
      <ModalHeader padding="10px">{textHeader}</ModalHeader>
      <Form onSubmit={onSubmit}>
        <ModalContentWrapper paddingTop="50px">
          <ModalContent>
            <Container>
              <LoadingIcon size="50px" />
              <TextTitle text={textTitle} />
              <ContentText>{text}</ContentText>
              <Input type="text" hide autoFocus handleChange={onChangeInput} />
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
            text="confirmar"
            marginLeft="14px"
            type="submit"
            justifyCenter
            alignCenter
            width="121"
          />
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default ModalEmprestimoValidation;
