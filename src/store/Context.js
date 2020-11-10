import { createContext } from 'react';

const StoreContext = createContext({
  isLogged: false,
  setIsLogged: () => {},
  removeIsLogged: () => {},
  usuarioLogado: {},
  setUsuarioLogado: () => {},
  removeUsuarioLogado: () => {},
  getUsuarios: {},
  setGetUsuarios: () => {},
  removeGetUsuarios: () => {},
  getKits: {},
  setGetKits: () => {},
  removeGetKits: () => {},
  getEmprestimos: {},
  setGetEmprestimos: () => {},
  removeGetEmprestimos: () => {},
});

export default StoreContext;
