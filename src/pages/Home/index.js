import React from 'react';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';

import {Container, HeaderContainer, BodyContainer, SideContainer, SideHeader, SideBody } from './styles';

function Home() {

  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <InputSearch placeholder="Pesquisa de kits" margin="30px"/>
      </HeaderContainer>
      <BodyContainer>
      </BodyContainer>
      <SideContainer>
        <SideHeader>
        </SideHeader>
        <SideBody>
        </SideBody>
      </SideContainer>
    </Container>
  );
}

export default Home;
