import React, { useState, useEffect, useContext } from 'react';
import produce from 'immer';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';
import Button from '../../components/Button';
import Card from '../../components/Card';
import StoreContext from '../../store/Context';
import CollapsibleTable from '../../components/CollapsibleTable';

import {Container, HeaderContainer, BodyContainer, SideContainer, SideHeader, SideBody, KitsRow, KitsRows, KitsHeader, KitsContainer, SideFooter } from './styles';

function Home() {

  const [searchValue, setSearchValue] = useState('');
  const [selectedKits, setSelectedKits] = useState([]);
  const { getUsuarios } = useContext(StoreContext);
  const [usuarios, setUsuarios] = useState(getUsuarios.usuarios);
  const [countUsuarios, setCountUsuarios] = useState(getUsuarios.count);
  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState();
  let kitRowCounter = 0;
  

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
    {
      "nome": "kit 4",
      "id": "4",
    },
    {
      "nome": "kit 5",
      "id": "5",
    },
    {
      "nome": "kit 6",
      "id": "6",
    },
    {
      "nome": "kit 7",
      "id": "7",
    },
    {
      "nome": "kit 8",
      "id": "8",
    },
    {
      "nome": "kit 9",
      "id": "9",
    },
    {
      "nome": "kit 10",
      "id": "10",
    },
    {
      "nome": "kit 11",
      "id": "11",
    },
    {
      "nome": "kit 12",
      "id": "12",
    },
    {
      "nome": "kit 13",
      "id": "13",
    },
    {
      "nome": "kit 14",
      "id": "14",
    },
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

  function rowClick(row) {
    setSelectedUsuario(row._id);
    setIsSelectedRow(true);
    console.log(row._id);
  }

  const rows = [];
  const qtKits = kits.length;
  const kitsPerRow = 3;
  const qtRows = parseInt((qtKits + kitsPerRow - 1 ) / 3);
  for (let i = 0; i < qtRows; i++){
    rows.push(kits.splice(0,3));
  } 
  console.log(rows);
  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <InputSearch handleChange={handleSearchValue} placeholder="Pesquisa de kits" margin="30px"/>
      </HeaderContainer>
      <BodyContainer>
        <KitsContainer>
          <KitsHeader>
            {qtKits} Kits cadastrados
          </KitsHeader>
          <KitsRows>
            {rows.map((row) =>{
              return (
                <KitsRow>
                  {
                      row.map((kit) => {
                        return (
                          <Card 
                          key={kit.id}
                          onClick={() => handleCardClick(kit)}
                          selected={selectedKits[kit.id - 1]}
                        >
                          {kit.nome}
                        </Card>
                        )
                      })               
                    }
                </KitsRow>
              )
            })}
          </KitsRows>       
        </KitsContainer>
        <SideContainer>
          <SideHeader>
            {countUsuarios} Usuários cadastrados
          </SideHeader>
          <SideBody>
            <CollapsibleTable clickedRowId={selectedUsuario} isSelectedRow={isSelectedRow} rowClick={rowClick} usuarios={usuarios} />
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
