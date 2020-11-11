import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import {
  NavContainer,
  TitleContainer,
  LogoutContainer,
  LogoutText,
  UserContainer,
  UserText,
  IconContainer,
} from './styles';
import theme from '../../styles/theme';
import StoreContext from '../../store/Context';

function Navbar() {
  const {
    removeIsLogged,
    usuarioLogado,
    removeUsuarioLogado,
    removeGetKits,
    removeGetUsuarios,
  } = useContext(StoreContext);

  function handleLogout() {
    removeIsLogged();
    removeUsuarioLogado();
    removeGetKits();
    removeGetUsuarios();
    window.location.reload(false);
  }

  return (
    <NavContainer className="navbar navbar-expand-lg navbar-light">
      <TitleContainer>LabControl</TitleContainer>
      <UserContainer>
        <IconContainer>
          <FaUser />
        </IconContainer>
        <UserText>{usuarioLogado?.nome}</UserText>
      </UserContainer>
      <LogoutContainer onClick={handleLogout}>
        <LogoutText href="#">Log out</LogoutText>
        <FiLogOut />
      </LogoutContainer>
    </NavContainer>
  );
}

export default Navbar;
