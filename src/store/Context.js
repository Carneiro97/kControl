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
});

export default StoreContext;
