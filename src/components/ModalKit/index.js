import React, { useState, useEffect } from 'react';

import {
  Modal,
  ModalHeader,
  ModalContentWrapper,
  ModalFooter,
} from '../Modal';

import Button from '../Button';
import LabelContainer from '../LabelContainer';
import theme from '../../styles/theme';
import Input from '../Input'
import TextArea from '../TextArea'
import DropDownStatusKit from '../DropDownStatusKit';
import { StatusKitEnum } from '../../enums';

function ModalKit({ isOpen, onClick, height, kit, isNewKit }) {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  function handleNome(e){
    setNome(e.target.dataset.text);
  }
  
  function handleDescricao(e){
    setDescricao(e.target.dataset.text);
  }
  
  function handleSelectedStatus(e){
    setSelectedStatus(e.target.dataset.text);
  }

  
  useEffect(() => {
    setNome(kit.nome);
  }, [kit])
  
  
  useEffect(() => {
    setDescricao(kit.descricao);
  }, [kit])
  
  
  useEffect(() => {
    setSelectedStatus(kit.status);
  }, [kit])

  return (
    <Modal isOpen={isOpen} onClick={onClick} height={height} width="460">
      <ModalHeader> 
        {!isNewKit ? kit.nome : 'Novo kit'}
      </ModalHeader>
      <ModalContentWrapper>
        <LabelContainer text="Nome">
          <Input handleChange={handleNome} placeholder={!isNewKit ? null : 'Insira o nome do kit'} lessHover value={isNewKit ? null : nome}/>
        </LabelContainer>
        <LabelContainer text="Descrição">
          <TextArea  handleChange={handleDescricao} placeholder={!isNewKit ? null : 'Insira a descrição do kit'} lessHover value={isNewKit ? null : descricao}/>
        </LabelContainer>
          <DropDownStatusKit 
              status={StatusKitEnum.returnName}
              onClick={handleSelectedStatus}
              headerText={!isNewKit ? selectedStatus || 'Selecione o status' : 'Selecione o status'}
              name="status"/>
      </ModalContentWrapper>
      <ModalFooter justifyContent={"space-between"} padding={"20px 40px 20px 40px"}>
        <Button
          onClick={onClick}
          text="fechar"
          marginBottom="30px"
          display="block"
          />
        <Button
          onClick={onClick}
          text="salvar"
          marginBottom="30px"
          display="salvar"
          />
      </ModalFooter>
    </Modal>
  );
}

export default ModalKit;
