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

function ModalNovoKit({ isOpen, onClick, height }) {
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [allFieldsOk, setAllFieldsOk] = useState(false);

  function handleNome(e) {
    setNome(e.target.value);
  }
  function handleDescricao(e) {
    setDescricao(e.target.value);
  }

  function handleSelectedStatus(e) {
    setSelectedStatus(e.target.dataset.text);
  }

  function handleSubmit(data) {
    console.log(data);
  }

  useEffect(() => {
    setSelectedStatus(null);
    setNome(null);
    setDescricao(null);
    setAllFieldsOk(false);
  }, [isOpen]);

  useEffect(() => {
    setAllFieldsOk(
      nome !== null &&
        nome !== '' &&
        descricao !== null &&
        descricao !== '' &&
        selectedStatus !== null
        ? true
        : false
    );
  }, [nome, descricao, selectedStatus]);

  return (
    <Modal isOpen={isOpen} onClick={onClick} height={height} width="460">
      <ModalHeader>Novo kit</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalContentWrapper>
          <LabelContainer text="Nome">
            <InputForm
              name="nome"
              handleChange={handleNome}
              placeholder="Insira o nome do kit"
              lessHover
            />
          </LabelContainer>
          <LabelContainer text="Descrição">
            <TextArea
              name="descricao"
              handleChange={handleDescricao}
              placeholder="Insira a descrição do kit"
              lessHover
            />
          </LabelContainer>
          <DropDownStatusKit
            status={StatusKitEnum.returnName}
            onClick={handleSelectedStatus}
            headerText={selectedStatus || 'Selecione o status'}
            name="status"
          />
        </ModalContentWrapper>
        <ModalFooter
          justifyContent="space-between"
          padding="20px 40px 20px 40px"
        >
          <Button
            onClick={onClick}
            text="fechar"
            marginBottom="30px"
            display="block"
          />
          <Button
            text="salvar"
            marginBottom="30px"
            display="salvar"
            type="submit"
            disabled={!allFieldsOk}
          />
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default ModalNovoKit;
