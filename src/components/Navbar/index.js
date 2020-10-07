import React, { useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { NavContainer, TitleContainer, LogoutContainer, LogoutText, UserContainer, UserText, IconContainer } from './styles';
import theme from '../../styles/theme'
import StoreContext from '../../store/Context';

function Navbar() {

  const { removeIsLogged, nomeUsuario, removeNomeUsuario } = useContext(StoreContext);

  function handleLogout(){
    removeIsLogged();
    removeNomeUsuario();
  }

  return (
    <NavContainer className="navbar navbar-expand-lg navbar-light">
      <TitleContainer>
         Retirada de kits 
      </TitleContainer>
      <UserContainer>
        <IconContainer>
          <FaUser/>
        </IconContainer>
        <UserText>
          {nomeUsuario}
        </UserText>
      </UserContainer>
      <LogoutContainer onClick={handleLogout}>
        <LogoutText href="#">Log out</LogoutText>
        <FiLogOut />
      </LogoutContainer>
    </NavContainer>
  );
}

export default Navbar;