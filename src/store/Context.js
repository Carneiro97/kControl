import { createContext } from 'react';

const StoreContext = createContext({
    isLogged: false,
    setIsLogged: () => {},
});

export default StoreContext;
