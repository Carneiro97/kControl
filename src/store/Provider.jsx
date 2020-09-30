import React from 'react';
import Context from './Context';
import useStorage from '../utils/useStorage'

const StoreProvider = ({children}) => {
    const [isLogged, setIsLogged] = useStorage('isLogged');
    const [nomeUsuario, setNomeUsuario] = useStorage('nomeUsuario');


    return (
        <Context.Provider
            value={{
                isLogged,
                setIsLogged,
                nomeUsuario,
                setNomeUsuario,
            }}
        >
            {children}
        </Context.Provider>
    )


}

export default StoreProvider;