import React, { useState, useEffect, useContext } from 'react';
import { Form } from '@unform/web';

import { Modal, ModalHeader, ModalContentWrapper, ModalFooter } from '../Modal';

import Button from '../Button';
import LabelContainer from '../LabelContainer';
import theme from '../../styles/theme';
import InputForm from '../InputForm';
import TextArea from '../TextArea';
import DropDownStatusKit from '../DropDownStatusKit';
import { StatusKitEnum } from '../../enums';
import StoreContext from '../../store/Context';

function ModalKit({ onClick, isOpen, height, kit, setIsOpen }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');
  const [ocorrencia, setOcorrencia] = useState('');
  const { handlePatchKit } = useContext(StoreContext);
  const [isDataOkToUpdate, setIsDataOkToUpdate] = useState(false);

  function handleNome(e) {
    setNome(e.target.value);
  }

  function handleDescricao(e) {
    setDescricao(e.target.value);
  }

  function handleSelectedStatus(e) {
    setStatus(e.target.dataset.text);
    setOcorrencia(
      e.target.dataset.text === StatusKitEnum.returnName[1] ? null : ocorrencia
    );
  }

  function handleOcorrencia(e) {
    setOcorrencia(e.target.value);
  }

  function handleSubmit(data) {
    const camposForm = ['descricao', 'nome', 'status', 'ocorrencia'];
    const params = camposForm.map((campo) => {
      return {
        propName: campo,
        value: data[campo],
      };
    });
    handlePatchKit(kit._id, params);
    setIsOpen(false);
  }

  useEffect(() => {
    setNome(kit.nome);
    setDescricao(kit.descricao);
    setStatus(kit.status);
    setOcorrencia(kit.ocorrencia);
  }, [kit]);

  useEffect(() => {
    const dataHasChanged = !(
      kit.nome === nome &&
      kit.descricao === descricao &&
      kit.status === status &&
      kit.ocorrencia === ocorrencia
    );
    if (nome === '' || descricao === '' || status === '' || ocorrencia === '') {
      setIsDataOkToUpdate(false);
    } else if (
      nome !== '' &&
      descricao !== '' &&
      status !== '' &&
      ocorrencia !== ''
    ) {
      setIsDataOkToUpdate(true && dataHasChanged);
    }
  }, [nome, descricao, status, ocorrencia]);

  useEffect(() => {
    setNome(kit.nome);
    setDescricao(kit.descricao);
    setStatus(kit.status);
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
              disabled={kit.status === 'Emprestado'}
            />
          </LabelContainer>
          <LabelContainer text="Descrição">
            <TextArea
              name="descricao"
              handleChange={handleDescricao}
              placeholder="Insira a descrição do kit"
              lessHover
              value={descricao}
              disabled={kit.status === 'Emprestado'}
            />
          </LabelContainer>
          <DropDownStatusKit
            status={StatusKitEnum.returnName}
            onClick={handleSelectedStatus}
            headerText={status}
            name="status"
            disable={kit.status === 'Emprestado'}
          />
          {status === StatusKitEnum.returnName[3] ? (
            <LabelContainer text="Ocorrência">
              <TextArea
                name="ocorrencia"
                handleChange={handleOcorrencia}
                placeholder="Insira a ocorrência do kit"
                lessHover
                value={ocorrencia}
              />
            </LabelContainer>
          ) : null}
        </ModalContentWrapper>
        <ModalFooter
          justifyContent={'space-between'}
          padding={'20px 40px 20px 40px'}
        >
          <Button
            onClick={onClick}
            type="button"
            text="fechar"
            marginBottom="30px"
          />
          <Button
            disabled={kit.status === 'Emprestado' || !isDataOkToUpdate}
            text="atualizar"
            marginBottom="30px"
            type="submit"
          />
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default ModalKit;
