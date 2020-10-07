import { createContext } from 'react';

const StoreContext = createContext({
    isLogged: false,
    setIsLogged: () => {},
    removeIsLogged: () => {},
    nomeUsuario: '',
    setNomeUsuario: () => {},
    removeNomeUsuario: () => {},
});

export default StoreContext;
