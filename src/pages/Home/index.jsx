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
import ModalCancelAction from '../../components/ModalCancelAction';
import ModalEmprestimoValidation from '../../components/ModalEmprestimoValidation';
import MySwitch from '../../components/Switch';
import { StatusKitEnum } from '../../enums';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../components/Toast';

import {
  Container,
  HeaderContainer,
  BodyContainer,
  UsuariosContainer,
  EmprestimosContainer,
  SideHeader,
  SideBody,
  KitsRow,
  KitsRows,
  KitsHeader,
  KitsContainer,
  SideFooter,
} from './styles';

function Home() {
  const {
    handleGetUsuarios,
    getUsuarios,
    handlePatchDigitalUsuario,
    handleGetBtDigitalUsuario,
    handleGetKits,
    getKits,
    handleDeleteKit,
    handlePostNovoEmprestimo,
  } = useContext(StoreContext);
  const [selectedKits, setSelectedKits] = useState([]);
  const kits = getKits.kits;
  const usuarios = getUsuarios.usuarios;

  // const kits = [
  //   {
  //     nome: 'Solda 1',
  //     descricao:
  //       'Kit de solda completo com ferro de solda, esponja e fonte inclusa',
  //     status: StatusKitEnum.returnName[1],
  //     id: 'idbd1',
  //   },
  //   {
  //     nome: 'kit 2',
  //     descricao:
  //       'Kit de solda completasso com ferro de solda, esponja e fonte inclusa',
  //     status: StatusKitEnum.returnName[2],
  //     id: 'idbd2',
  //   },
  //   {
  //     nome: 'Solda 2',
  //     descricao:
  //       'Kit de solda completíssimo com ferro de solda, esponja e fonte inclusa',
  //     status: StatusKitEnum.returnName[3],
  //     id: 'idbd3',
  //   },
  //   {
  //     nome: 'Solda 3',
  //     id: 'idbd4',
  //     status: StatusKitEnum.returnName[3],
  //   },
  //   {
  //     nome: 'Cabos 1',
  //     id: 'idbd5',
  //     status: StatusKitEnum.returnName[2],
  //   },
  //   {
  //     nome: 'Cabos 2',
  //     id: 'idbd6',
  //     status: StatusKitEnum.returnName[3],
  //   },
  //   {
  //     nome: 'Cabos 3',
  //     id: 'idbd7',
  //     status: StatusKitEnum.returnName[2],
  //   },
  //   {
  //     nome: 'Fonte 1',
  //     id: 'idbd8',
  //     status: StatusKitEnum.returnName[3],
  //   },
  //   {
  //     nome: 'Fonte 2',
  //     id: 'idbd9',
  //     status: StatusKitEnum.returnName[3],
  //   },
  //   {
  //     nome: 'Fonte 3',
  //     id: 'idbd10',
  //     status: StatusKitEnum.returnName[3],
  //   },
  //   {
  //     nome: 'kit 11',
  //     id: 'idbd11',
  //     status: StatusKitEnum.returnName[2],
  //   },
  //   {
  //     nome: 'kit 12',
  //     id: 'idbd12',
  //     status: StatusKitEnum.returnName[2],
  //   },
  //   {
  //     nome: 'kit 13',
  //     id: 'idbd13',
  //     status: StatusKitEnum.returnName[2],
  //   },
  //   {
  //     nome: 'kit 14',
  //     id: 'idbd14',
  //     status: StatusKitEnum.returnName[2],
  //   },
  // ];

  const [countUsuarios, setCountUsuarios] = useState(getUsuarios.count);
  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState();
  const [searchUsuario, setSearchUsuario] = useState('');
  const [searchKit, setSearchKit] = useState('');
  const [isOpenModalKit, setIsOpenModalKit] = useState(false);
  const [isOpenModalNovoKit, setIsOpenModalNovoKit] = useState(false);
  const [isOpenModalCancelAction, setIsOpenModalCancelAction] = useState(false);
  const [modalKit, setModalKit] = useState('');
  const [selectedParametersOk, setSelectedParametersOk] = useState(false);
  const [countKits, setCountKits] = useState(getKits.count);
  const [kitToBeDeleted, setKitToBeDeleted] = useState([]);
  const [isBiometria, setIsBiometria] = useState(false);
  const [
    isOpenModalEmprestimoValidation,
    setIsOpenModalEmprestimoValidation,
  ] = useState(false);
  const [autenticacaoAluno, setAutenticacaoAluno] = useState('');
  const editedKits = [];
  let rows = [];
  let filteredEditedKits;
  let interval;

  kits.map((kit) => {
    editedKits.push(
      produce(kit, (draft) => {
        draft.frontId = editedKits.length + 1;

        return draft;
      })
    );
  });

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

  function handleOnClickInfo(kit, e) {
    e.stopPropagation();
    setModalKit(kit);
    handleIsOpenModalKit();
  }

  function handleCardClick(kit) {
    const newSelected = produce(selectedKits, (draft) => {
      draft[kit.frontId - 1] = {
        id: kit._id,
        selected: !selectedKits[kit.frontId - 1]?.selected,
      };

      return draft;
    });

    setSelectedKits(newSelected);
  }

  function rowClick(row) {
    setSelectedUsuario(
      usuarios.filter((usuario) => usuario._id === row._id)[0]
    );
    setIsSelectedRow(true);
  }

  function handleAssociarKits() {
    let selectedKitsIds = [];
    selectedKits
      .filter((selectedKit) => selectedKit.selected === true)
      .map((selectedKit) => selectedKitsIds.push(selectedKit.id));
    const associarParams = {
      kits: selectedKitsIds,
      idUsuario: selectedUsuario,
    };
    handlePostNovoEmprestimo(associarParams);
    setIsOpenModalEmprestimoValidation(false);
    setSelectedKits([]);
  }

  function clearUsuarioSelection() {
    setIsSelectedRow(false);
    setSelectedUsuario(null);
  }

  function handleIsOpenModalKit() {
    if (isOpenModalKit) {
    }
    setIsOpenModalKit(!isOpenModalKit);
  }

  function handleIsOpenModalNovoKit() {
    setIsOpenModalNovoKit(!isOpenModalNovoKit);
  }

  function handleIsOpenModalCancelAction(e, kit) {
    e.stopPropagation();
    setKitToBeDeleted(kit);
    if (isOpenModalCancelAction) {
      setKitToBeDeleted(null);
    }
    setIsOpenModalCancelAction(!isOpenModalCancelAction);
  }

  function handleIsOpenModalEmprestimoValidation() {
    setIsOpenModalEmprestimoValidation(!isOpenModalEmprestimoValidation);
  }

  function handleAddClick() {
    setIsOpenModalNovoKit(!isOpenModalNovoKit);
  }

  function handleOnClickDelete() {
    handleDeleteKit(kitToBeDeleted._id);
    setIsOpenModalCancelAction(!isOpenModalCancelAction);
  }

  function handleModalEmprestimoValidationSubmit(data) {
    setAutenticacaoAluno(data.autenticacao);
  }

  function handleDigitalUsuario() {
    const params = [
      {
        propName: 'btKit',
        value: true,
      },
    ];
    handlePatchDigitalUsuario(selectedUsuario, params);
    interval = setInterval(() => {
      handleGetBtDigitalUsuario(
        selectedUsuario,
        () => clearInterval(interval),
        handleAssociarKits
      );
    }, 5000);
  }

  function handleIsBiometria(e) {
    setIsBiometria(e.target.checked);
  }

  useEffect(() => {
    editedKits.map((kit) => selectedKits.push({ id: kit.id, selected: false }));
  }, []);

  useEffect(() => {
    let hasOneSelected = false;
    selectedKits.map((kit) => {
      hasOneSelected = hasOneSelected || kit.selected;
    });
    setSelectedParametersOk(selectedUsuario && hasOneSelected ? true : false);
  }, [selectedUsuario, selectedKits]);

  useEffect(() => {
    if (selectedUsuario) {
      if (autenticacaoAluno !== selectedUsuario?._id) {
        toast.error(
          <ErrorToast size="40">
            <strong> Autenticação inválida. </strong>
          </ErrorToast>
        );
        setIsOpenModalEmprestimoValidation(false);
      } else {
        // console.log(selectedUsuario);
        // toastSucesso viria da response do post empréstimo e patch do kit
        handleAssociarKits();
        toast.error(
          <SuccessToast size="40">
            <strong> Empréstimo criado com sucesso. </strong>
          </SuccessToast>
        );
      }
    }
  }, [autenticacaoAluno]);
  
  useEffect(() => {
    handleGetUsuarios();
    handleGetKits();
  }, []);
  
  useEffect(() => {
    setCountKits(getKits.count);
  }, [kits]);

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
                    onClick={
                      kit.status !== 'Disponível'
                        ? null
                        : () => handleCardClick(kit)
                    }
                    selected={selectedKits[kit.frontId - 1]?.selected}
                    title={kit.nome}
                    onClickInfo={(e) => handleOnClickInfo(kit, e)}
                    naoDisponivel={kit.status !== 'Disponível' ? true : false}
                    onClickDelete={(e) => handleIsOpenModalCancelAction(e, kit)}
                    status={kit.status}
                    disableDelete={kit.status === 'Emprestado'}
                  />
                ))}
              </KitsRow>
            ))}
          </KitsRows>
        </KitsContainer>
        <UsuariosContainer>
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
              clickedRowId={selectedUsuario?._id}
              isSelectedRow={isSelectedRow}
              rowClick={rowClick}
              usuarios={usuarios}
            />
          </SideBody>
          <SideFooter>
            <Button
              disabled={!selectedParametersOk}
              onClick={() => {
                handleIsOpenModalEmprestimoValidation();
                if (isBiometria) handleDigitalUsuario();
              }}
            >
              Realizar empréstimo
            </Button>
            <MySwitch
              checked={isBiometria}
              onChange={handleIsBiometria}
              marginLeft="30px"
              label="Autenticação biométrica"
            />
          </SideFooter>
        </UsuariosContainer>
        {/* <EmprestimosContainer>
          <SideHeader> Empréstimos </SideHeader>
          <InputSearch
            inputName="searchUsuario"
            hideAddButton
            padding="15px 0 15px 0"
            handleChange={handleSearchUsuario}
            placeholder="Pesquise pelo nome do usuário"
          />
          <SideBody>
            
          </SideBody>
          <SideFooter>
            <Button disabled={!selectedParametersOk} onClick={handleAssociarKits}>Finalizar empréstimo</Button>
          </SideFooter>
        </EmprestimosContainer> */}
      </BodyContainer>
      <ModalKit
        kit={modalKit}
        isOpen={isOpenModalKit}
        onClick={handleIsOpenModalKit}
        setIsOpen={setIsOpenModalKit}
      />
      <ModalNovoKit
        isOpen={isOpenModalNovoKit}
        onClick={handleIsOpenModalNovoKit}
        setIsOpen={setIsOpenModalNovoKit}
      />
      <ModalCancelAction
        isOpen={isOpenModalCancelAction}
        onClick={handleIsOpenModalCancelAction}
        onClickOk={handleOnClickDelete}
        textHeader="Exclusão de kit"
        textTitle={kitToBeDeleted?.nome}
        text="Deseja realmente excluir esse kit?"
      ></ModalCancelAction>
      <ModalEmprestimoValidation
        isOpen={isOpenModalEmprestimoValidation}
        onClick={handleIsOpenModalEmprestimoValidation}
        textHeader={isBiometria ? "Autenticação do aluno via biometria digital." : "Autenticação do aluno via QR-Code"}
        textTitle={selectedUsuario?.nome}
        text={isBiometria ? "Aguardando autenticação do aluno via biometria digital (APP)." : "Aguardando autenticação do aluno via QR-Code"}
        onSubmit={handleModalEmprestimoValidationSubmit}
        isBiometria={isBiometria}
      ></ModalEmprestimoValidation>
    </Container>
  );
}

export default Home;
