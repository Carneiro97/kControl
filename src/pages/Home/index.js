import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';
import Button from '../../components/Button';
import Card from '../../components/Card';

import {Container, HeaderContainer, BodyContainer, SideContainer, SideHeader, SideBody, KitsContainer, SideFooter } from './styles';

function Home() {

  const [searchValue, setSearchValue] = useState('');

  function handleSearchValue(e){
    setSearchValue(e.target.value);
  }

  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <InputSearch handleChange={handleSearchValue} placeholder="Pesquisa de kits" margin="30px"/>
      </HeaderContainer>
      <BodyContainer>
        <KitsContainer>
          <Card>
            kit 1
          </Card>
          <Card>
            kit 2
          </Card>
          <Card>
            kit 3
          </Card>
        </KitsContainer>
        <SideContainer>
          <SideHeader>
            Kits Selecionados
          </SideHeader>
          <SideBody>
          </SideBody>
          <SideFooter>
            <Button>
              Associar kits
            </Button>
          </SideFooter>          
        </SideContainer>
      </BodyContainer>
    </Container>
  );
}

export default Home;
