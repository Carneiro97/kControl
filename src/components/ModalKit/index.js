import React from 'react';

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

function ModalKit({ isOpen, onClick, height, kit }) {

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
          <Input lessHover value={kit.descricao}/>
        </LabelContainer>
        <LabelContainer text="Status">
          <Input lessHover value={kit.status}/>
        </LabelContainer>    
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
