import React from 'react';
import Context from './Context';
import useStorage from '../utils/useStorage'

const StoreProvider = ({children}) => {
    const [isLogged, setIsLogged] = useStorage('isLogged');

    return (
        <Context.Provider
            value={{
                isLogged,
                setIsLogged,
            }}
        >
            {children}
        </Context.Provider>
    )


}

export default StoreProvider;