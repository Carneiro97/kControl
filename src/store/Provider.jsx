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

  const handlePatchKit = (kit, params) => {
    axios
      .patch(`http://localhost:3030/kits/${kit._id}`, params)
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
        getKits,
        handleGetKits,
        handlePatchKit,
        handleNewKit,
        handleDeleteKit,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
