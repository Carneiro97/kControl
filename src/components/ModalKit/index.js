import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';

import { Modal, ModalHeader, ModalContentWrapper, ModalFooter } from '../Modal';

import Button from '../Button';
import LabelContainer from '../LabelContainer';
import theme from '../../styles/theme';
import InputForm from '../InputForm';
import TextArea from '../TextArea';
import DropDownStatusKit from '../DropDownStatusKit';
import { StatusKitEnum } from '../../enums';

function ModalKit({ onClick, isOpen, height, kit }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  function handleNome(e) {
    setNome(e.target.dataset.text);
  }

  function handleDescricao(e) {
    setDescricao(e.target.dataset.text);
  }

  function handleSelectedStatus(e) {
    setSelectedStatus(e.target.dataset.text);
  }

  function handleSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    setNome(kit.nome);
  }, [kit]);

  useEffect(() => {
    setDescricao(kit.descricao);
  }, [kit]);

  useEffect(() => {
    setSelectedStatus(kit.status);
  }, [kit]);

  return (
    <Modal isOpen={isOpen} onClick={onClick} height={height} width="460">
      <ModalHeader>{kit.nome}</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalContentWrapper>
          <LabelContainer text="Nome">
            <InputForm
              name="nome"
              handleChange={handleNome}
              placeholder="Insira o nome do kit"
              lessHover
              value={nome}
            />
          </LabelContainer>
          <LabelContainer text="Descrição">
            <TextArea
              name="descricao"
              handleChange={handleDescricao}
              placeholder="Insira a descrição do kit"
              lessHover
              value={descricao}
            />
          </LabelContainer>
          <DropDownStatusKit
            status={StatusKitEnum.returnName}
            onClick={handleSelectedStatus}
            headerText={selectedStatus}
            name="status"
          />
        </ModalContentWrapper>
        <ModalFooter
          justifyContent={'space-between'}
          padding={'20px 40px 20px 40px'}
        >
          <Button onClick={onClick} text="fechar" marginBottom="30px" />
          <Button text="atualizar" marginBottom="30px" type="submit" />
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default ModalKit;
