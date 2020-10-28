import React, { useState } from 'react';

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

function ModalKit({ isOpen, onClick, height, kit }) {

  const [selectedStatus, setSelectedStatus] = useState(kit.status);

  function handleSelectedStatus(e){
    setSelectedStatus(e.target.dataset.text);
  }

  return (
    <Modal isOpen={isOpen} onClick={onClick} height={height} width="460">
      <ModalHeader> 
        {kit.nome}
      </ModalHeader>
      <ModalContentWrapper>
        <LabelContainer text="Nome">
          <Input lessHover value={kit.nome}/>
        </LabelContainer>
        <LabelContainer text="Descrição">
          <TextArea lessHover value={kit.descricao}/>
        </LabelContainer>
          <DropDownStatusKit 
              status={StatusKitEnum.returnName}
              onClick={handleSelectedStatus}
              headerText={selectedStatus || 'Selecione o status'}
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
