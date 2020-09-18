import React from 'react';

import { routes } from './routes';

import Login from '../pages/Login';

const Routes = () => {
    //const { loggedIn } = useSelector((state) => state.auth);
    return (
        <>
            <Switch>
                {routes.map((r) => (
                    <ProtectedRoute
                        exact
                        key={r.id}
                        path={`/novo${r.url}`}
                        component={r.component}
                        isPrivate={r.isPrivate}
                    />
                ))}
                {!loggedIn ? (
                    <Route exact path="/novo/login" component={LoginPage} />
                ) : null}
                <ProtectedRoute path="*" to="/novo/lista" />
            </Switch>
        </>
    );
};

export default Routes;