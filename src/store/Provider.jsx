import React, { useEffect } from 'react';
import Context from './Context';
import useStorage from '../utils/useStorage';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../components/Toast';

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
      });
  };

  const handlePatchKit = (id, params) => {
    axios
      .patch(`http://localhost:3030/kits/${id}`, params)
      .then(function (response) {
        toast.error(
          <SuccessToast size="40">
            <strong> Kit atualizado com sucesso! </strong>
          </SuccessToast>
        );
      })
      .catch(function (error) {
        console.log(error);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
