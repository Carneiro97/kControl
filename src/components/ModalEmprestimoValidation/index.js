import React, { useEffect } from 'react';

import InputForm from '../InputForm';
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
  onSubmit,
}) {
  function handleOnInValid(e) {
    e.target.setCustomValidity('É necessário autenticar o usuário.');
  }

  function handleInputChange(e) {
    e.target.setCustomValidity('');
  }

  return (
    <Modal isOpen={isOpen} onClick={onClick} height="345" width="460">
      <ModalHeader padding="10px">{textHeader}</ModalHeader>
      <Form onInvalid={handleOnInValid} autoComplete="off" onSubmit={onSubmit}>
        <ModalContentWrapper paddingTop="50px">
          <ModalContent>
            <Container>
              <LoadingIcon size="50px" />
              <TextTitle text={textTitle} />
              <ContentText>{text}</ContentText>
              <InputForm
                name="autenticacao"
                type="text"
                autoFocus
                hide
                handleChange={handleInputChange}
                textAlign="center"
                required
                title=""
              />
            </Container>
          </ModalContent>
        </ModalContentWrapper>
        <ModalFooter padding="10px 20px 20px 20px">
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
