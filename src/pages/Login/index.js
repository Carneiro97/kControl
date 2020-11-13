import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySwitch from '../../components/Switch';
import StoreContext from '../../store/Context';
import { ErrorToast } from '../../components/Toast';
import InputPassword from '../../components/InputPassword';
import LabelContainer from '../../components/LabelContainer';
import InputForm from '../../components/InputForm';
import { Form } from '@unform/web';

import { Container, LoginContainer } from './styles';

function Login() {
  const history = useHistory();
  const {
    setIsLogged,
    isLogged,
    setUsuarioLogado,
    handlePostLogin,
  } = useContext(StoreContext);
  const [checked, setChecked] = useState(false);
  const [usuario, setUsuario] = useState(``);
  const [senha, setSenha] = useState(``);
  const [loginType, setLoginType] = useState(``);
  const [loginParams, setLoginParams] = useState({
    codigo: usuario,
    senha: senha,
  });

  if (isLogged) {
    history.push('/home');
  }

  function handleSubmit(e) {
    handlePostLogin(loginType, loginParams);
  }

  function handleUsuario(e) {
    setUsuario(e.target.value);
    setLoginParams(
      loginType === 'codigo'
        ? { codigo: e.target.value, senha: senha }
        : { cpf: e.target.value, senha: senha }
    );
  }

  function handleSenha(e) {
    setSenha(e.target.value);
    setLoginParams(
      loginType === 'codigo'
        ? { codigo: usuario, senha: e.target.value }
        : { cpf: usuario, senha: e.target.value }
    );
  }

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setLoginType(checked ? 'cpf' : 'codigo');
  }, [checked]);

  useEffect(() => {
    setLoginParams(
      loginType === 'codigo'
        ? { codigo: usuario, senha: senha }
        : { cpf: usuario, senha: senha }
    );
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
          <h1>Lab - Control</h1>
          <h2>Retirada de kits escolares</h2>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <LabelContainer text="Usuário">
                  <InputForm
                    font="16px Calibri Regular"
                    width="510px"
                    height="40px"
                    name="usuario"
                    handleChange={handleUsuario}
                    placeholder={checked ? 'Digite seu CPF' : 'Digite seu RA'}
                    value={usuario}
                  />
                </LabelContainer>
              </div>
              <div className="form-group">
                <InputPassword
                  font="18px Calibri Regular"
                  handleChange={handleSenha}
                  width="510"
                  height="40"
                  placeholder="Digite sua senha"
                  name="senha"
                  labelName="Senha"
                  value={senha}
                  isLogin
                />
              </div>
              <LoginContainer>
                <button type="submit" className="btn btn-black">
                  Login
                </button>
                <MySwitch
                  checked={checked}
                  onChange={handleChecked}
                  marginLeft="30px"
                  label="Login por CPF"
                />
              </LoginContainer>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
