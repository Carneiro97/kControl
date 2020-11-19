import React, { useState, useEffect, useContext } from 'react';
import produce from 'immer';
import Navbar from '../../components/Navbar';
import InputSearch from '../../components/InputSearch';
import Button from '../../components/Button';
import Card from '../../components/Card';
import StoreContext from '../../store/Context';
import CollapsibleTable from '../../components/CollapsibleTable';
import CollapsibleTableEmprestimos from '../../components/CollapsibleTableEmprestimos';
import ModalKit from '../../components/ModalKit';
import ModalEmprestimo from '../../components/ModalEmprestimo';
import ModalNovoKit from '../../components/ModalNovoKit';
import ModalCancelAction from '../../components/ModalCancelAction';
import ModalEmprestimoValidation from '../../components/ModalEmprestimoValidation';
import MySwitch from '../../components/Switch';
import { toast } from 'react-toastify';
import { ErrorToast, SuccessToast } from '../../components/Toast';

import {
  Container,
  HeaderContainer,
  BodyContainer,
  UsuariosContainer,
  Side,
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
    resetarFlagsDigitalUsuario,
    handleGetKits,
    getKits,
    handleDeleteKit,
    handleGetEmprestimos,
    getEmprestimos,
    handlePostNovoEmprestimo,
    handlePatchFinalizarEmprestimo,
  } = useContext(StoreContext);

  const kits = getKits?.kits;
  const usuarios = getUsuarios?.usuarios;
  const emprestimos = getEmprestimos?.emprestimos;

  const [countUsuarios, setCountUsuarios] = useState(getUsuarios?.count);
  const [countKits, setCountKits] = useState(getKits?.count);
  const [countEmprestimos, setCountEmprestimos] = useState(
    getEmprestimos?.count
  );
  const [isSelectedRow, setIsSelectedRow] = useState(false);
  const [isSelectedRowEmprestimo, setIsSelectedRowEmprestimo] = useState(false);
  const [selectedUsuario, setSelectedUsuario] = useState();
  const [selectedKits, setSelectedKits] = useState([]);
  const [selectedEmprestimo, setSelectedEmprestimo] = useState([]);
  const [alunoSelectedEmprestimo, setAlunoSelectedEmprestimo] = useState({});
  const [searchUsuario, setSearchUsuario] = useState('');
  const [searchKit, setSearchKit] = useState('');
  const [searchEmprestimo, setSearchEmprestimo] = useState('');
  const [isOpenModalKit, setIsOpenModalKit] = useState(false);
  const [isOpenModalNovoKit, setIsOpenModalNovoKit] = useState(false);
  const [isOpenModalCancelAction, setIsOpenModalCancelAction] = useState(false);
  const [isOpenModalEmprestimo, setIsOpenModalEmprestimo] = useState(false);
  const [modalKit, setModalKit] = useState('');
  const [selectedParametersOk, setSelectedParametersOk] = useState(false);
  const [kitToBeDeleted, setKitToBeDeleted] = useState([]);
  const [isBiometria, setIsBiometria] = useState(false);
  const [showEmprestimos, setShowEmprestimos] = useState(false);
  const [
    isOpenModalEmprestimoValidation,
    setIsOpenModalEmprestimoValidation,
  ] = useState(false);
  const [autenticacaoAluno, setAutenticacaoAluno] = useState('');

  const editedKits = [];
  let rows = [];
  let filteredEditedKits;

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

  function handleSearchEmprestimo(e) {
    setSearchEmprestimo(e.target.value);
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
    if (showEmprestimos) {
      setAlunoSelectedEmprestimo(row.alunoEmprestimo[0]);
      setSelectedEmprestimo(
        emprestimos.filter((emprestimo) => emprestimo._id === row._id)[0]
      );
      setIsSelectedRowEmprestimo(true);
    } else {
      setSelectedUsuario(
        usuarios.filter((usuario) => usuario._id === row._id)[0]
      );
      setIsSelectedRow(true);
    }
  }

  function handleAcaoEmprestimo() {
    if (!showEmprestimos) {
      let selectedKitsIds = [];
      let selectedTrueKits = [];
      let selectedKitsNomes = [];

      selectedKits
        .filter((selectedKit) => selectedKit.selected === true)
        .map((selectedKit) => selectedKitsIds.push(selectedKit.id));

      let idKitsLength = selectedKitsIds.length;

      for (let i = 0; i < idKitsLength; i++) {
        selectedTrueKits.push(
          kits.filter((kit) => kit._id === selectedKitsIds[i])
        );
      }
      selectedTrueKits.map((selectedTrueKit) =>
        selectedKitsNomes.push(selectedTrueKit[0].nome)
      );
      const associarParams = {
        idAluno: selectedUsuario._id,
        nomeAluno: selectedUsuario.nome,
        codigoAluno: selectedUsuario.codigo,
        idKits: selectedKitsIds,
        nomeKits: selectedKitsNomes,
      };
      handlePostNovoEmprestimo(associarParams);
      setSelectedKits([]);
    } else {
      handlePatchFinalizarEmprestimo(
        selectedEmprestimo._id,
        selectedEmprestimo.idKits
      );
      setIsSelectedRowEmprestimo(false);
    }
    setIsOpenModalEmprestimoValidation(false);
  }

  function clearUsuarioSelection() {
    setIsSelectedRow(false);
    setSelectedUsuario(null);
  }

  function handleIsOpenModalKit() {
    setIsOpenModalKit(!isOpenModalKit);
  }
  function handleIsOpenModalEmprestimo(e) {
    // console.log(e.target.parent);
    setIsOpenModalEmprestimo(!isOpenModalEmprestimo);
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
    if (isBiometria && isOpenModalEmprestimoValidation) {
      resetarFlagsDigitalUsuario(
        showEmprestimos ? alunoSelectedEmprestimo : selectedUsuario
      );
    }
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
    if (isBiometria)
      handleGetBtDigitalUsuario(
        showEmprestimos ? alunoSelectedEmprestimo : selectedUsuario,
        handleAcaoEmprestimo
      );
  }

  function handleDigitalUsuario() {
    const params = [
      {
        propName: 'btKit',
        value: true,
      },
    ];
    handlePatchDigitalUsuario(
      showEmprestimos ? alunoSelectedEmprestimo : selectedUsuario,
      params
    );
  }

  function handleIsBiometria(e) {
    setIsBiometria(e.target.checked);
  }

  function handleShowEmprestimos(e) {
    setShowEmprestimos(e.target.checked);
    setSearchEmprestimo('');
    setSearchUsuario('');
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
    if (showEmprestimos) {
      if (selectedEmprestimo && autenticacaoAluno) {
        if (autenticacaoAluno != alunoSelectedEmprestimo?.codigo) {
          toast.error(
            <ErrorToast size="40">
              <strong> Autenticação inválida. </strong>
            </ErrorToast>
          );
          setIsOpenModalEmprestimoValidation(false);
        } else {
          handleAcaoEmprestimo();
        }
      }
    } else if (selectedUsuario && autenticacaoAluno) {
      if (autenticacaoAluno != selectedUsuario?.codigo) {
        toast.error(
          <ErrorToast size="40">
            <strong> Autenticação inválida. </strong>
          </ErrorToast>
        );

        setIsOpenModalEmprestimoValidation(false);
      } else {
        handleAcaoEmprestimo();
      }
    }
  }, [autenticacaoAluno]);

  useEffect(() => {
    handleGetUsuarios();
    handleGetKits();
    handleGetEmprestimos();
  }, []);

  useEffect(() => {
    setCountKits(getKits?.count);
  }, [kits]);

  useEffect(() => {
    setAutenticacaoAluno('');
  }, [isOpenModalEmprestimoValidation]);

  useEffect(() => {
    setCountEmprestimos(getEmprestimos.count);
  }, [getEmprestimos]);

  useEffect(() => {
    setCountKits(getKits.count);
  }, [getKits]);

  return (
    <Container>
      <Navbar />
      <HeaderContainer />
      <BodyContainer>
        <KitsContainer>
          <KitsHeader>Kits cadastrados: {countKits} </KitsHeader>
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
        <Side>
          {!showEmprestimos ? (
            <SideUsuarios
              searchUsuario={searchUsuario}
              selectedUsuario={selectedUsuario}
              isSelectedRow={isSelectedRow}
              rowClick={rowClick}
              usuarios={usuarios}
              selectedParametersOk={selectedParametersOk}
              handleIsOpenModalEmprestimoValidation={
                handleIsOpenModalEmprestimoValidation
              }
              isBiometria={isBiometria}
              handleDigitalUsuario={handleDigitalUsuario}
              handleIsBiometria={handleIsBiometria}
              countUsuarios={countUsuarios}
              handleSearchUsuario={handleSearchUsuario}
            />
          ) : (
            <SideEmprestimos
              searchEmprestimo={searchEmprestimo}
              selectedEmprestimo={selectedEmprestimo}
              isSelectedRowEmprestimo={isSelectedRowEmprestimo}
              rowClick={rowClick}
              emprestimos={emprestimos}
              selectedParametersOk={selectedEmprestimo ? true : false}
              handleIsOpenModalEmprestimoValidation={
                handleIsOpenModalEmprestimoValidation
              }
              isBiometria={isBiometria}
              handleDigitalUsuario={handleDigitalUsuario}
              handleIsBiometria={handleIsBiometria}
              countEmprestimos={countEmprestimos}
              handleSearchEmprestimo={handleSearchEmprestimo}
              kits={kits}
              usuarios={usuarios}
              onClickObs={handleIsOpenModalEmprestimo}
            />
          )}
          <SideFooter>
            <MySwitch
              checked={showEmprestimos}
              onChange={handleShowEmprestimos}
              marginLeft="30px"
              label="Visualizar empréstimos"
            />
            <MySwitch
              checked={isBiometria}
              onChange={handleIsBiometria}
              marginLeft="30px"
              label="Autenticação biométrica"
            />
          </SideFooter>
        </Side>
      </BodyContainer>
      <ModalKit
        kit={modalKit}
        isOpen={isOpenModalKit}
        onClick={handleIsOpenModalKit}
        setIsOpen={setIsOpenModalKit}
      />
      <ModalEmprestimo
        emprestimo={selectedEmprestimo}
        isOpen={isOpenModalEmprestimo}
        onClick={handleIsOpenModalEmprestimo}
        setIsOpen={setIsOpenModalEmprestimo}
        alunoEmprestimo={alunoSelectedEmprestimo}
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
        textHeader={
          isBiometria
            ? 'Autenticação do aluno via biometria digital.'
            : 'Autenticação do aluno via QR-Code'
        }
        textTitle={
          showEmprestimos ? alunoSelectedEmprestimo.nome : selectedUsuario?.nome
        }
        text={
          isBiometria
            ? 'Autentique-se no app e clique em "confirmar".'
            : 'Aguardando leitura do QR-Code'
        }
        onSubmit={handleModalEmprestimoValidationSubmit}
        isBiometria={isBiometria}
      ></ModalEmprestimoValidation>
    </Container>
  );
}

const SideUsuarios = ({
  searchUsuario,
  selectedUsuario,
  isSelectedRow,
  rowClick,
  usuarios,
  selectedParametersOk,
  handleIsOpenModalEmprestimoValidation,
  isBiometria,
  handleDigitalUsuario,
  countUsuarios,
  handleSearchUsuario,
}) => {
  return (
    <UsuariosContainer>
      <SideHeader> Usuários cadastrados: {countUsuarios}</SideHeader>
      <InputSearch
        inputName="searchUsuario"
        hideAddButton
        padding="15px 0 15px 0"
        handleChange={handleSearchUsuario}
        placeholder="Pesquise pelo RA do aluno"
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
      </SideFooter>
    </UsuariosContainer>
  );
};

const SideEmprestimos = ({
  searchEmprestimo,
  selectedEmprestimo,
  isSelectedRowEmprestimo,
  rowClick,
  emprestimos,
  handleIsOpenModalEmprestimoValidation,
  isBiometria,
  handleDigitalUsuario,
  countEmprestimos,
  handleSearchEmprestimo,
  kits,
  usuarios,
  onClickObs,
}) => {
  return (
    <UsuariosContainer>
      <SideHeader>Empréstimos cadastrados: {countEmprestimos}</SideHeader>
      <InputSearch
        inputName="searchEmprestimo"
        hideAddButton
        padding="15px 0 15px 0"
        handleChange={handleSearchEmprestimo}
        placeholder="Pesquise pelo RA do aluno"
      />
      <SideBody>
        <CollapsibleTableEmprestimos
          searchEmprestimo={searchEmprestimo}
          clickedRowId={selectedEmprestimo?._id}
          isSelectedRow={isSelectedRowEmprestimo}
          rowClick={rowClick}
          emprestimos={emprestimos}
          kits={kits}
          usuarios={usuarios}
          onClickObs={onClickObs}
        />
      </SideBody>
      <SideFooter>
        <Button
          disabled={
            !isSelectedRowEmprestimo ||
            selectedEmprestimo?.status === 'Finalizado'
          }
          onClick={() => {
            handleIsOpenModalEmprestimoValidation();
            if (isBiometria) handleDigitalUsuario();
          }}
        >
          Finalizar empréstimo
        </Button>
      </SideFooter>
    </UsuariosContainer>
  );
};

export default Home;
