import React, { useState, useEffect } from 'react';
import produce from 'immer';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';
import Button from '../../components/Button';
import Card from '../../components/Card';

import {Container, HeaderContainer, BodyContainer, SideContainer, SideHeader, SideBody, KitsRow, KitsContainer, SideFooter } from './styles';

function Home() {

  const [searchValue, setSearchValue] = useState('');
  const [selectedKits, setSelectedKits] = useState([]);

  const kits = [
    {
      "nome": "kit 1",
      "id": "1",
    },
    {
      "nome": "kit 2",
      "id": "2",
    },
    {
      "nome": "kit 3",
      "id": "3",
    },
    // {
    //   "nome": "kit 4",
    //   "id": "4",
    // },
    // {
    //   "nome": "kit 5",
    //   "id": "5",
    // },
    // {
    //   "nome": "kit 6",
    //   "id": "6",
    // },
  ];

  useEffect(() => {
    kits.map((kit) => (
      selectedKits.push(false)
    ));
  },[])

  function handleSearchValue(e){
    setSearchValue(e.target.value);
  }

  function handleCardClick(kit){
    const newSelected = produce(selectedKits, (draft) => {
      draft[kit.id - 1] = !selectedKits[kit.id - 1];

      return draft;
  });

  setSelectedKits(newSelected);
  }

  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <InputSearch handleChange={handleSearchValue} placeholder="Pesquisa de kits" margin="30px"/>
      </HeaderContainer>
      <BodyContainer>
        <KitsContainer>
          <KitsRow>
            {
              kits.map((kit) => (
                <Card 
                  key={kit.id}
                  onClick={() => handleCardClick(kit)}
                  selected={selectedKits[kit.id - 1]}
                >
                  {kit.nome}
                </Card>
              ))
            }
          </KitsRow>
          <KitsRow>
            {
              kits.map((kit) => (
                <Card 
                  key={kit.id}
                  onClick={handleCardClick}
                >
                  {kit.nome}
                </Card>
              ))
            }
          </KitsRow>
          <KitsRow>
            {
              kits.map((kit) => (
                <Card 
                  key={kit.id}
                  onClick={handleCardClick}
                >
                  {kit.nome}
                </Card>
              ))
            }
          </KitsRow>
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
