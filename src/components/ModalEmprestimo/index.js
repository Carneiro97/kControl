import React, { useState, useEffect, useContext } from 'react';
import { Form } from '@unform/web';

import { Modal, ModalHeader, ModalContentWrapper, ModalFooter } from '../Modal';

import Button from '../Button';
import LabelContainer from '../LabelContainer';
import TextArea from '../TextArea';
import StoreContext from '../../store/Context';

function ModalEmprestimo({
  onClick,
  isOpen,
  height,
  emprestimo,
  setIsOpen,
  alunoEmprestimo,
}) {
  const [descricao, setDescricao] = useState(emprestimo?.descricao);
  const { handlePatchEmprestimo } = useContext(StoreContext);
  const [isDataOkToUpdate, setIsDataOkToUpdate] = useState(false);

  function handleDescricao(e) {
    setDescricao(e.target.value);
  }

  function handleSubmit(data) {
    const params = [
      {
        propName: 'descricao',
        value: data.descricao,
      },
    ];
    handlePatchEmprestimo(emprestimo?._id, params);
    setIsOpen(false);
  }

  useEffect(() => {
    setDescricao(emprestimo?.descricao);
  }, [emprestimo]);

  useEffect(() => {
    setIsDataOkToUpdate(!(emprestimo?.descricao === descricao));
  }, [descricao]);

  useEffect(() => {
    setDescricao(emprestimo?.descricao);
  }, []);

  return (
    <Modal isOpen={isOpen} onClick={onClick} height={height} width="460">
      <ModalHeader>{alunoEmprestimo?.nome}</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalContentWrapper minHeight="0">
          <LabelContainer text="Observações">
            <TextArea
              name="descricao"
              handleChange={handleDescricao}
              placeholder="Insira observações do empréstimo"
              lessHover
              value={descricao}
              disabled={emprestimo?.status === 'Finalizado'}
            />
          </LabelContainer>
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
            disabled={emprestimo?.status === 'Finalizado' || !isDataOkToUpdate}
            text="atualizar"
            marginBottom="30px"
            type="submit"
          />
        </ModalFooter>
      </Form>
    </Modal>
  );
}

export default ModalEmprestimo;
