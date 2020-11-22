import React, { useEffect } from 'react';

import InputForm from '../InputForm';
import LoadingIcon from '../../components/LoadingIcon';
import { MdFingerprint } from 'react-icons/md';
import { ImMobile } from 'react-icons/im';
import { AiOutlineScan } from 'react-icons/ai';
import { BsShieldLock } from 'react-icons/bs';

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

import { Container, ContentText, TextTitle, IconsContainer } from './styles';

function ModalEmprestimoValidation({
  isOpen,
  onClick,
  text,
  textHeader,
  textTitle,
  onSubmit,
  isBiometria,
}) {
  function handleOnInValid(e) {
    e.target.setCustomValidity('É necessário autenticar o usuário.');
  }

  function handleInputChange(e) {
    e.target.setCustomValidity('');
  }

  return (
    <Modal isOpen={isOpen} onClick={onClick} width="460">
      <ModalHeader padding="10px">{textHeader}</ModalHeader>
      <Form onInvalid={handleOnInValid} autoComplete="off" onSubmit={onSubmit}>
        <ModalContentWrapper paddingTop="50px">
          <ModalContent>
            <Container>
              <LoadingIcon size="50px" />
              <TextTitle text={textTitle} />
              <ContentText>{text}</ContentText>
              {!isBiometria ? (
                <>
                  <AiOutlineScan
                    title="Scan QR-Code"
                    color={theme.mainColor}
                    size="70"
                  ></AiOutlineScan>
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
                </>
              ) : (
                <iconsContainer>
                  <ImMobile
                    title="App e-Carteirinha"
                    color={theme.mainColor}
                    size="50"
                  />
                  <MdFingerprint
                    title="Biometria digital"
                    color={theme.mainColor}
                    size="50"
                  />
                </iconsContainer>
              )}
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
          {!isBiometria ? (
            <BsShieldLock color={theme.mainColor} size="40" />
          ) : null}
          <Button
            text="confirmar"
            marginLeft="14px"
            type="submit"
            justifyCenter
            alignCenter
            width="121"
            display={isBiometria ? false : 'none'}
          />
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default ModalEmprestimoValidation;
