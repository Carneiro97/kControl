import React, {useState, useEffect} from 'react';
import history from '../../services/history'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySwitch from '../../components/Switch';

import {Container, LoginContainer} from './styles';

function Login() {

  const [checked, setChecked] = useState(false);
  var loginType = "codigo";

  function handleSubmit(e){
    e.preventDefault();
    const res = axios.post('http://localhost:3030/usuarios/login/' + loginType, {
      codigo: 0,
      senha: '1',
    })
    .then(function (response) {
      toast.success("Login efetuado com sucesso.");      
    })
    .catch(function(error) {
      console.log(error);
      toast.error("Usuário ou senha inválido.");
    });
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    loginType = checked ? 'cpf' : 'codigo';
}, [checked]);

  return (
    <Container>
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
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Usuário</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={checked ? "Digite seu CPF" : "Digite seu código de usuário"}
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
              <LoginContainer>
                <button type="submit" className="btn btn-black">
                  Login
                </button>
                <MySwitch checked={checked} onChange={handleChecked} marginLeft="30px" />
              </LoginContainer>          
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </Container>
  );
}

export default Login;
