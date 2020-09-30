import { createContext } from 'react';

const StoreContext = createContext({
    isLogged: false,
    setIsLogged: () => {},
    nomeUsuario: '',
    setNomeUsuario: () => {},
});

export default StoreContext;
