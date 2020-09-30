import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySwitch from '../../components/Switch';
import StoreContext from '../../store/Context';

import {Container, LoginContainer} from './styles';

function Login() {
  const history = useHistory();
  const { setIsLogged, isLogged, setNomeUsuario } = useContext(StoreContext);
  const [checked, setChecked] = useState(false);
  const [usuario, setUsuario] = useState(``);
  const [senha, setSenha] = useState(``);
  const [loginType, setLoginType] = useState(``);
  const [loginParams, setLoginParams] = useState({
    codigo: usuario, senha: senha
  });

  function handleSubmit(e){
    e.preventDefault();
    const res = axios.post('http://localhost:3030/usuarios/login/' + loginType, loginParams)
    .then(function (response) {
      toast.success("Login efetuado com sucesso.");  
      setIsLogged(true);
      setNomeUsuario(response.data.usuario);
      setTimeout(function() {
        history.push('/home');
      }, 1500);
    })
    .catch(function(error) {
      console.log(error);
      toast.error("Usuário ou senha inválido.");
      setIsLogged(false);
      setNomeUsuario('');
    });
  };

  function handleUsuario(e){
    setUsuario(e.target.value);
    setLoginParams(loginType === 'codigo' ? {codigo: e.target.value, senha: senha} : {cpf: e.target.value, senha: senha})
  }

  function handleSenha(e){
    setSenha(e.target.value);
    setLoginParams(loginType === 'codigo' ? {codigo: usuario, senha: e.target.value} : {cpf: usuario, senha: e.target.value})
  }

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setLoginType(checked ? 'cpf' : 'codigo');
  }, [checked]);

  useEffect(() => {
    setLoginParams(loginType === 'codigo' ? {codigo: usuario, senha: senha} : {cpf: usuario, senha: senha})
  }, [loginType]);

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
            Retirada de kits escolares
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
                  onChange={handleUsuario}
                />
              </div>
              <div className="form-group">
                <label>Senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                  onChange={handleSenha}
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
