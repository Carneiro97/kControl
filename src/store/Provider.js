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

import { herokuAPI, localAPI } from '../services/api';

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

  const handlePostLogin = (loginType, loginParams) => {
    herokuAPI
      .post('/usuarios/login/' + loginType, loginParams)
      .then(function (response) {
        setIsLogged(true);
        setUsuarioLogado(response.data.usuario);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro nos dados inseridos. </strong>
          </ErrorToast>
        );
        setIsLogged(false);
        setUsuarioLogado(null);
      });
  };

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
    herokuAPI
      .get('/usuarios')
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
    herokuAPI
      .get(`/usuarios/btdigital/id/${usuario._id}`)
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
    herokuAPI
      .patch(`/usuarios/${idUsuario}`, params)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlePatchDigitalUsuario = (usuario, params) => {
    herokuAPI
      .patch(`/usuarios/${usuario._id}`, params)
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
    herokuAPI
      .get('/kits/')
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
    herokuAPI
      .patch(`/kits/${kitId}`, params)
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
    herokuAPI
      .patch(`/kits/${kitId}`, params)
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
    herokuAPI
      .post('/kits', params)
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
    herokuAPI
      .delete(`/kits/${id}`)
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
    params = {
      ...params,
      codigoMonitorEmprestimo: usuarioLogado._id,
      nomeMonitorEmprestimo: usuarioLogado.nome,
    };

    herokuAPI
      .post('/emprestimos', params)
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
    herokuAPI
      .get('/emprestimos/')
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
      {
        propName: 'nomeMonitorFinalizacao',
        value: usuarioLogado.nome,
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
    herokuAPI
      .patch(`/emprestimos/${emprestimoId}`, params)
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
    herokuAPI
      .patch(`/emprestimos/${emprestimoId}`, params)
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
        handlePostLogin,
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
