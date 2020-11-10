import React, { useEffect } from 'react';
import Context from './Context';
import useStorage from '../utils/useStorage';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ErrorToast,
  SuccessToast,
  DeleteToast,
  AddToast,
  UpdateToast,
  WarningToast,
  AuthToast,
} from '../components/Toast';

import { StatusEmprestimoEnum } from '../enums/StatusEmprestimoEnum';

const StoreProvider = ({ children }) => {
  const [isLogged, setIsLogged, removeIsLogged] = useStorage('isLogged');
  const [usuarioLogado, setUsuarioLogado, removeUsuarioLogado] = useStorage(
    'usuarioLogado'
  );
  const [getUsuarios, setGetUsuarios, removeGetUsuarios] = useStorage(
    'usuarios'
  );
  const [getKits, setGetKits, removeGetKits] = useStorage('kits');
  const [getEmprestimos, setGetEmprestimos, removeGetEmprestimos] = useStorage(
    'emprestimos'
  );

  useEffect(() => {
    handleGetUsuarios();
    handleGetKits();
    handleGetEmprestimos();
  }, []);

  const resetarFlagsDigitalUsuario = (usuario) => {
    const params = [
      {
        propName: 'btKit',
        value: false,
      },
      {
        propName: 'btDigital',
        value: false,
      },
    ];
    handlePatchUsuario(usuario._id, params);
  };

  const handleGetUsuarios = () => {
    axios
      .get('http://localhost:3030/usuarios/')
      .then(function (response) {
        setGetUsuarios(response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao carregar usuários. </strong>
          </ErrorToast>
        );
      });
  };

  const handleGetBtDigitalUsuario = (usuario, handleAcaoEmprestimo) => {
    axios
      .get(`http://localhost:3030/usuarios/btdigital/id/${usuario._id}`)
      .then(function (response) {
        const btDigital = response.data.btDigital;
        if (btDigital) {
          toast.error(
            <AuthToast size="40">
              <strong> Autenticação por digital concluída! </strong>
            </AuthToast>
          );
          handleAcaoEmprestimo();
          resetarFlagsDigitalUsuario(usuario);
        } else {
          toast.error(
            <ErrorToast size="40">
              <strong> Aluno não autenticado no aplicativo. </strong>
            </ErrorToast>
          );
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong>
              {' '}
              Erro ao carregar autenticação por digital do usuário.{' '}
            </strong>
          </ErrorToast>
        );
        resetarFlagsDigitalUsuario(usuario);
      });
  };

  const handlePatchUsuario = (idUsuario, params) => {
    axios
      .patch(`http://localhost:3030/usuarios/${idUsuario}`, params)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlePatchDigitalUsuario = (usuario, params) => {
    axios
      .patch(`http://localhost:3030/usuarios/${usuario._id}`, params)
      .then(function (response) {
        if (params[0]['value']) {
          toast.error(
            <WarningToast size="40">
              <strong> Autentique-se pelo aplicativo e-Carteirinha. </strong>
            </WarningToast>
          );
        }
        handleGetUsuarios();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao habilitar empréstimo no aplicativo. </strong>
          </ErrorToast>
        );
      });
  };

  const handleGetKits = () => {
    axios
      .get('http://localhost:3030/kits/')
      .then(function (response) {
        setGetKits(response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao carregar os kits cadastrados. </strong>
          </ErrorToast>
        );
      });
  };

  const handlePatchAssociarKits = (kitId, params) => {
    axios
      .patch(`http://localhost:3030/kits/${kitId}`, params)
      .then(function (response) {
        handleGetKits();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao atualizar kit. </strong>
          </ErrorToast>
        );
      });
  };

  const handlePatchKit = (kitId, params) => {
    axios
      .patch(`http://localhost:3030/kits/${kitId}`, params)
      .then(function (response) {
        toast.error(
          <UpdateToast size="40">
            <strong> Kit atualizado com sucesso! </strong>
          </UpdateToast>
        );
        handleGetKits();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao atualizar kit. </strong>
          </ErrorToast>
        );
      });
  };

  const handleNewKit = (params) => {
    axios
      .post('http://localhost:3030/kits', params)
      .then(function (response) {
        toast.error(
          <AddToast size="40">
            <strong> Kit criado com sucesso. </strong>
          </AddToast>
        );
        handleGetKits();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao criar kit. </strong>
          </ErrorToast>
        );
      });
  };

  const handleDeleteKit = (id) => {
    axios
      .delete(`http://localhost:3030/kits/${id}`)
      .then(function (response) {
        toast.error(
          <DeleteToast size="40">
            <strong> Kit excluído com sucesso. </strong>
          </DeleteToast>
        );
        handleGetKits();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao deletar kit. </strong>
          </ErrorToast>
        );
      });
  };

  const handlePostNovoEmprestimo = (params) => {
    console.log(params);
    params = {
      idAluno: params.idAluno,
      idKits: params.kits,
      codigoMonitorEmprestimo: usuarioLogado._id,
    };

    axios
      .post('http://localhost:3030/emprestimos', params)
      .then(function (response) {
        params.idKits.map((kitId) => {
          const kitParams = [
            {
              propName: 'status',
              value: 'Emprestado',
            },
          ];
          handlePatchAssociarKits(kitId, kitParams);
        });
        toast.error(
          <SuccessToast size="40">
            <strong> Empréstimo criado com sucesso. </strong>
          </SuccessToast>
        );
        handleGetEmprestimos();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao criar empréstimo. </strong>
          </ErrorToast>
        );
      });
  };

  const handleGetEmprestimos = () => {
    axios
      .get('http://localhost:3030/emprestimos/')
      .then(function (response) {
        setGetEmprestimos(response.data);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao carregar os empréstimos cadastrados. </strong>
          </ErrorToast>
        );
      });
  };

  const handlePatchFinalizarEmprestimo = (emprestimoId, idKits) => {
    var date = new Date();
    const params = [
      {
        propName: 'status',
        value: 'Finalizado',
      },
      {
        propName: 'codigoMonitorFinalizacao',
        value: usuarioLogado._id,
      },
      {
        propName: 'dtFinalizacaoEmprestimo',
        value: date,
      },
    ];
    idKits.map((kitId) => {
      const kitParams = [
        {
          propName: 'status',
          value: 'Disponível',
        },
      ];
      handlePatchAssociarKits(kitId, kitParams);
    });
    axios
      .patch(`http://localhost:3030/emprestimos/${emprestimoId}`, params)
      .then(function (response) {
        toast.error(
          <UpdateToast size="40">
            <strong> Empréstimo finalizado com sucesso! </strong>
          </UpdateToast>
        );
        handleGetEmprestimos();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao atualizar o empréstimo. </strong>
          </ErrorToast>
        );
      });
  };
  const handlePatchEmprestimo = (emprestimoId, params) => {
    axios
      .patch(`http://localhost:3030/emprestimos/${emprestimoId}`, params)
      .then(function (response) {
        toast.error(
          <UpdateToast size="40">
            <strong> Empréstimo atualizado com sucesso! </strong>
          </UpdateToast>
        );
        handleGetEmprestimos();
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao atualizar o empréstimo. </strong>
          </ErrorToast>
        );
      });
  };

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        removeIsLogged,
        usuarioLogado,
        setUsuarioLogado,
        removeUsuarioLogado,
        getUsuarios,
        removeGetUsuarios,
        setGetUsuarios,
        handleGetUsuarios,
        handlePatchDigitalUsuario,
        handleGetBtDigitalUsuario,
        resetarFlagsDigitalUsuario,
        getKits,
        setGetKits,
        removeGetKits,
        handleGetKits,
        handlePatchKit,
        handleNewKit,
        handleDeleteKit,
        getEmprestimos,
        setGetEmprestimos,
        removeGetEmprestimos,
        handleGetEmprestimos,
        handlePostNovoEmprestimo,
        handlePatchFinalizarEmprestimo,
        handlePatchEmprestimo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
