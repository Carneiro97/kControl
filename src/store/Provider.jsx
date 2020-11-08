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

const StoreProvider = ({ children }) => {
  const [isLogged, setIsLogged, removeIsLogged] = useStorage('isLogged');
  const [nomeUsuario, setNomeUsuario, removeNomeUsuario] = useStorage(
    'nomeUsuario'
  );
  const [getUsuarios, setGetUsuarios] = useStorage('usuarios');
  const [getKits, setGetKits] = useStorage('kits');

  useEffect(() => {
    handleGetUsuarios();
    handleGetKits();
  }, []);

  const resetarFlagsUsuario = (usuario) => {
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
    handlePatchUsuario(usuario, params);
  };

  const handleGetUsuarios = () => {
    axios
      .get('http://localhost:3030/usuarios/')
      .then(function (response) {
        setGetUsuarios(response.data);
        console.log('HANDLE GET USUARIOS');
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

  const handlePostNovoEmprestimo = (params) => {
    console.log(params);
    params.kits.map((kitId) => {
      const kitParams = [
        {
          propName: 'status',
          value: 'Emprestado',
        },
      ];
      handlePatchAssociarKits(kitId, kitParams);
    });
  };

  const handleGetBtDigitalUsuario = (
    usuario,
    clearInterval,
    handleAssociarKits
  ) => {
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
          clearInterval();
          resetarFlagsUsuario(usuario);
          handleAssociarKits();
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
        clearInterval();
        resetarFlagsUsuario(usuario);
      });
  };

  const handlePatchUsuario = (usuario, params) => {
    axios
      .patch(`http://localhost:3030/usuarios/${usuario._id}`, params)
      .then(function (response) {
        console.log('desligado');
        handleGetUsuarios();
      })
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
              <strong> Empréstimo habilitado no aplicativo. </strong>
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
        console.log('HANDLE GET KITS');
      })
      .catch(function (error) {
        console.log(error);
        toast.error(
          <ErrorToast size="40">
            <strong> Erro ao carregar kits. </strong>
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

  return (
    <Context.Provider
      value={{
        isLogged,
        setIsLogged,
        removeIsLogged,
        nomeUsuario,
        setNomeUsuario,
        removeNomeUsuario,
        getUsuarios,
        handleGetUsuarios,
        handlePatchDigitalUsuario,
        handleGetBtDigitalUsuario,
        getKits,
        handleGetKits,
        handlePatchKit,
        handleNewKit,
        handleDeleteKit,
        handlePostNovoEmprestimo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
