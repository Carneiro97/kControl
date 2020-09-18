import React from 'react';

import './styles.scss';

function Login() {
  return (
    <>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" />
      <script src="//code.jquery.com/jquery-1.11.1.min.js" />

      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Empréstimo de kits escolares
          </h2>
          <p>Faça seu login aqui.</p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>Usuário</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu usuário"
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                />
              </div>
              <button type="submit" className="btn btn-black">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
