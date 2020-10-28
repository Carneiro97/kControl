import React, { useState, useEffect, useContext } from 'react';
import produce from 'immer';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';
import Button from '../../components/Button';
import Card from '../../components/Card';
import StoreContext from '../../store/Context';
import CollapsibleTable from '../../components/CollapsibleTable';
import ModalKit from '../../components/ModalKit';
import { StatusKitEnum } from '../../enums';

import {
  Container, HeaderContainer, BodyContainer, SideContainer, SideHeader, SideBody, KitsRow, KitsRows, KitsHeader, KitsContainer, SideFooter,
} from './styles';

function Home() {
  const [selectedKits, setSelectedKits] = useState([]);
  const { getUsuarios } = useContext(StoreContext);
  const [usuarios, setUsuarios] = useState(getUsuarios.usuarios);
  const [countUsuarios, setCountUsuarios] = useState(getUsuarios.count);
  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState();
  const [searchUsuario, setSearchUsuario] = useState('');
  const [searchKit, setSearchKit] = useState('');
  const [isOpenModalKit, setIsOpenModalKit] = useState(false);
  const [modalKit, setModalKit] = useState('');

  let kits = [
    {
      id: '1',
      nome: 'Solda 1',
      descricao: 'Kit de solda completo com ferro de solda, esponja e fonte inclusa',
      status: StatusKitEnum.returnName[1],
    },
    {
      nome: 'kit 2',
      id: '2',
      descricao: 'Kit de solda completo com ferro de solda, esponja e fonte inclusa',
      status: StatusKitEnum.returnName[2],
    },
    {
      nome: 'Solda 2',
      id: '3',
      descricao: 'Kit de solda completo com ferro de solda, esponja e fonte inclusa',
      status: StatusKitEnum.returnName[3],
    },
    {
      nome: 'Solda 3',
      id: '4',
    },
    {
      nome: 'Cabos 1',
      id: '5',
    },
    {
      nome: 'Cabos 2',
      id: '6',
    },
    {
      nome: 'Cabos 3',
      id: '7',
    },
    {
      nome: 'Fonte 1',
      id: '8',
    },
    {
      nome: 'Fonte 2',
      id: '9',
    },
    {
      nome: 'Fonte 3',
      id: '10',
    },
    {
      nome: 'kit 11',
      id: '11',
    },
    {
      nome: 'kit 12',
      id: '12',
    },
    {
      nome: 'kit 13',
      id: '13',
    },
    {
      nome: 'kit 14',
      id: '14',
    },
  ];

  const rows = [];
  kits = kits.filter((kit) => kit.nome.toLowerCase().includes(searchKit.toLowerCase()));

  const qtKits = kits.length;
  const kitsPerRow = 3;
  const qtRows = parseInt((qtKits + kitsPerRow - 1) / 3, 10);
  for (let i = 0; i < qtRows; i++) {
    rows.push(kits.splice(0, 3));
  }

  useEffect(() => {
    kits.map((kit) => (
      selectedKits.push(false)
    ));
  }, []);

  function handleSearchUsuario(e) {
    setSearchUsuario(e.target.value);
  }

  function handleSearchKit(e) {
    setSearchKit(e.target.value);
  }

  function handleOnClickInfo(kit) {
    setModalKit(kit);
    handleIsOpenModalKit();
  }

  function handleCardClick(kit) {
    const newSelected = produce(selectedKits, (draft) => {
      draft[kit.id - 1] = !selectedKits[kit.id - 1];

      return draft;
    });
    setSelectedKits(newSelected);
  }

  function rowClick(row) {
    setSelectedUsuario(row._id);
    setIsSelectedRow(true);
  }

  function handleAssociarKits() {
    console.log(selectedKits);
    console.log(selectedUsuario);
  }

  function clearUsuarioSelection() {
    setIsSelectedRow(false);
  }

  function handleIsOpenModalKit() {
    setIsOpenModalKit(!isOpenModalKit);
  }

  return (
    <Container>
      <Navbar />
      <HeaderContainer />
      <BodyContainer>
        <KitsContainer>
          <KitsHeader>
            {qtKits}
            {' '}
            kits cadastrados
          </KitsHeader>
          <InputSearch padding="15px 0 15px 0" handleChange={handleSearchKit} placeholder="Pesquise pelo nome do kit" />
          <KitsRows>
            {rows.map((row) => (
              <KitsRow>
                {
                      row.map((kit) => (
                        <Card
                          key={kit.id}
                          onClick={() => handleCardClick(kit)}
                          selected={selectedKits[kit.id - 1]}
                          title={kit.nome}
                          onClickInfo={() => handleOnClickInfo(kit)}
                        />
                      ))
                    }
              </KitsRow>
            ))}
          </KitsRows>
        </KitsContainer>
        <SideContainer>
          <SideHeader>
            {countUsuarios}
            {' '}
            usuários cadastrados
          </SideHeader>
          <InputSearch padding="15px 0 15px 0" handleChange={handleSearchUsuario} placeholder="Pesquise pelo nome do usuário" />
          <SideBody>
            <CollapsibleTable searchUsuario={searchUsuario} clickedRowId={selectedUsuario} isSelectedRow={isSelectedRow} rowClick={rowClick} usuarios={usuarios} />
          </SideBody>
          <SideFooter>
            <Button onClick={handleAssociarKits}>
              Associar kits
            </Button>
          </SideFooter>
        </SideContainer>
      </BodyContainer>
      <ModalKit kit={modalKit} isOpen={isOpenModalKit} onClick={handleIsOpenModalKit} />
    </Container>
  );
}

export default Home;
