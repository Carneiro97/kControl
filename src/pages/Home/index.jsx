import React, { useState, useEffect, useContext } from 'react';
import produce from 'immer';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';
import Button from '../../components/Button';
import Card from '../../components/Card';
import StoreContext from '../../store/Context';
import CollapsibleTable from '../../components/CollapsibleTable';
import ModalKit from '../../components/ModalKit';
import ModalNovoKit from '../../components/ModalNovoKit';
import { StatusKitEnum } from '../../enums';

import {
  Container,
  HeaderContainer,
  BodyContainer,
  SideContainer,
  SideHeader,
  SideBody,
  KitsRow,
  KitsRows,
  KitsHeader,
  KitsContainer,
  SideFooter,
} from './styles';

function Home() {
  const [selectedKits, setSelectedKits] = useState([]);
  const { getUsuarios } = useContext(StoreContext);
  const [usuarios, setUsuarios] = useState(getUsuarios.usuarios);
  const kits = [
    {
      nome: 'Solda 1',
      descricao:
        'Kit de solda completo com ferro de solda, esponja e fonte inclusa',
      status: StatusKitEnum.returnName[1],
      id: 'idbd1',
    },
    {
      nome: 'kit 2',
      descricao:
        'Kit de solda completasso com ferro de solda, esponja e fonte inclusa',
      status: StatusKitEnum.returnName[2],
      id: 'idbd2',
    },
    {
      nome: 'Solda 2',
      descricao:
        'Kit de solda completíssimo com ferro de solda, esponja e fonte inclusa',
      status: StatusKitEnum.returnName[3],
      id: 'idbd3',
    },
    {
      nome: 'Solda 3',
      id: 'idbd4',
    },
    {
      nome: 'Cabos 1',
      id: 'idbd5',
    },
    {
      nome: 'Cabos 2',
      id: 'idbd6',
    },
    {
      nome: 'Cabos 3',
      id: 'idbd7',
    },
    {
      nome: 'Fonte 1',
      id: 'idbd8',
    },
    {
      nome: 'Fonte 2',
      id: 'idbd9',
    },
    {
      nome: 'Fonte 3',
      id: 'idbd10',
    },
    {
      nome: 'kit 11',
      id: 'idbd11',
    },
    {
      nome: 'kit 12',
      id: 'idbd12',
    },
    {
      nome: 'kit 13',
      id: 'idbd13',
    },
    {
      nome: 'kit 14',
      id: 'idbd14',
    },
  ];

  const [countUsuarios, setCountUsuarios] = useState(getUsuarios.count);
  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState();
  const [searchUsuario, setSearchUsuario] = useState('');
  const [searchKit, setSearchKit] = useState('');
  const [isOpenModalKit, setIsOpenModalKit] = useState(false);
  const [isOpenModalNovoKit, setIsOpenModalNovoKit] = useState(false);
  const [modalKit, setModalKit] = useState('');
  const [selectedParametersOk, setSelectedParametersOk] = useState(false);
  const [countKits, setCountKits] = useState(kits.length);
  const editedKits = [];
  let rows = [];
  let filteredEditedKits;

  kits.map((kit) => {
    editedKits.push(produce(kit, (draft) => {
      draft.frontId = editedKits.length + 1;

      return draft;
    }));
  })

  filteredEditedKits = editedKits.filter((kit) =>
    kit.nome.toLowerCase().includes(searchKit.toLowerCase())
    );

  const qtKits = filteredEditedKits.length;
  const kitsPerRow = 3;
  const qtRows = parseInt((qtKits + kitsPerRow - 1) / 3, 10);
  for (let i = 0; i < qtRows; i++) {
    rows.push(filteredEditedKits.splice(0, 3));
  }

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
      draft[kit.frontId - 1] = {
        id: kit.id,
        selected: !selectedKits[kit.frontId - 1]?.selected,
      };

      return draft;
    });

    setSelectedKits(newSelected);
  }

  function rowClick(row) {
    setSelectedUsuario(row._id);
    setIsSelectedRow(true);
  }

  function handleAssociarKits() {
    let selectedKitsIds = [];
    selectedKits.filter((selectedKit) => selectedKit.selected === true).map((selectedKit) => selectedKitsIds.push(selectedKit.id));
    const associarParams = {
      kits: selectedKitsIds,
      idUsuario: selectedUsuario,
    };
    console.log(associarParams);
  }

  function clearUsuarioSelection() {
    setIsSelectedRow(false);
    setSelectedUsuario(null);
  }

  function handleIsOpenModalKit() {
    setIsOpenModalKit(!isOpenModalKit);
  }

  function handleIsOpenModalNovoKit() {
    setIsOpenModalNovoKit(!isOpenModalNovoKit);
  }

  function handleAddClick() {
    setIsOpenModalNovoKit(!isOpenModalNovoKit);
  }

  useEffect(() => {
    editedKits.map((kit) => selectedKits.push({ id: kit.id, selected: false }));
  }, []);

  useEffect(() => {
    let hasOneSelected = false;
    selectedKits.map((kit) => {
      hasOneSelected = hasOneSelected || kit.selected;
    })
    setSelectedParametersOk(selectedUsuario && hasOneSelected ? true : false);
  }, [selectedUsuario, selectedKits]);

  return (
    <Container>
      <Navbar />
      <HeaderContainer />
      <BodyContainer>
        <KitsContainer>
          <KitsHeader>{countKits} kits cadastrados</KitsHeader>
          <InputSearch
            inputName="searchKit"
            onClickButtonAdd={handleAddClick}
            padding="15px 0 15px 0"
            handleChange={handleSearchKit}
            placeholder="Pesquise pelo nome do kit"
          />
          <KitsRows>
            {rows.map((row) => (
              <KitsRow>
                {row.map((kit) => (
                  <Card
                    key={kit.frontId}
                    onClick={() => handleCardClick(kit)}
                    selected={selectedKits[kit.frontId - 1]?.selected}
                    title={kit.nome}
                    onClickInfo={() => handleOnClickInfo(kit)}
                  />
                ))}
              </KitsRow>
            ))}
          </KitsRows>
        </KitsContainer>
        <SideContainer>
          <SideHeader>{countUsuarios} usuários cadastrados</SideHeader>
          <InputSearch
            inputName="searchUsuario"
            hideAddButton
            padding="15px 0 15px 0"
            handleChange={handleSearchUsuario}
            placeholder="Pesquise pelo nome do usuário"
          />
          <SideBody>
            <CollapsibleTable
              searchUsuario={searchUsuario}
              clickedRowId={selectedUsuario}
              isSelectedRow={isSelectedRow}
              rowClick={rowClick}
              usuarios={usuarios}
            />
          </SideBody>
          <SideFooter>
            <Button disabled={!selectedParametersOk} onClick={handleAssociarKits}>Realizar empréstimo</Button>
          </SideFooter>
        </SideContainer>
      </BodyContainer>
      <ModalKit
        kit={modalKit}
        isOpen={isOpenModalKit}
        onClick={handleIsOpenModalKit}
      />
      <ModalNovoKit
        isOpen={isOpenModalNovoKit}
        onClick={handleIsOpenModalNovoKit}
      />
    </Container>
  );
}

export default Home;
