import React from 'react';
import Context from './Context';
import useStorage from '../utils/useStorage'

const StoreProvider = ({children}) => {
    const [isLogged, setIsLogged, removeIsLogged] = useStorage('isLogged');
    const [nomeUsuario, setNomeUsuario, removeNomeUsuario] = useStorage('nomeUsuario');


    return (
        <Context.Provider
            value={{
                isLogged,
                setIsLogged,
                removeIsLogged,
                nomeUsuario,
                setNomeUsuario,
                removeNomeUsuario
            }}
        >
            {children}
        </Context.Provider>
    )


}

export default StoreProvider;