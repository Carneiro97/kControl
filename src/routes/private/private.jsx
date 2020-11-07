import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import StoreContext from '../../store/Context';

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { isLogged } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        isLogged ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default RoutesPrivate;
