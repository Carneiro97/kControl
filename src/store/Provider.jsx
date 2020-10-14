import React, { useEffect } from 'react';
import Context from './Context';
import useStorage from '../utils/useStorage'
import axios from 'axios';

const StoreProvider = ({children}) => {
    const [isLogged, setIsLogged, removeIsLogged] = useStorage('isLogged');
    const [nomeUsuario, setNomeUsuario, removeNomeUsuario] = useStorage('nomeUsuario');
    const [getUsuarios, setGetUsuarios] = useStorage('usuarios');


    

    useEffect(() => {
        axios.get('http://localhost:3030/usuarios/')
        .then(function(response) {
            setGetUsuarios(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }, [])

    return (
        <Context.Provider
            value={{
                isLogged,
                setIsLogged,
                removeIsLogged,
                nomeUsuario,
                setNomeUsuario,
                removeNomeUsuario,
                getUsuarios
            }}
        >
            {children}
        </Context.Provider>
    )


}

export default StoreProvider;