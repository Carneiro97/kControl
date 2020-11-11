import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StatusEmprestimoEnum from '../../enums/StatusEmprestimoEnum';
import { CgDetailsMore } from 'react-icons/cg';

import theme from '../../styles/theme';

import { ObsButton } from './styles';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row({ onClick, key, row, isSelected, onClickObs }) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow
        hover
        onClick={() => onClick(row)}
        selected={isSelected}
        className={classes.root}
      >
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <ObsButton>
            <CgDetailsMore title={'Observações...'} onClick={onClickObs} />
          </ObsButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nomeAluno}
        </TableCell>
        <TableCell align="right">
          <ul>
            {row.nomeKits.map((kit, index) => {
              return <li key={index}>{kit}</li>;
            })}
          </ul>
        </TableCell>
        <TableCell align="right">{row.dtEmprestimo}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Dados do emprestimo
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Monitor emprestimo</TableCell>
                    <TableCell>Monitor finalização</TableCell>
                    <TableCell>Data finalização</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.info.map((infoRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {infoRow.nomeMonitorEmprestimo
                          ? infoRow.nomeMonitorEmprestimo
                          : '-'}
                      </TableCell>
                      <TableCell>
                        {infoRow.nomeMonitorFinalizacao
                          ? infoRow.nomeMonitorFinalizacao
                          : '-'}
                      </TableCell>
                      <TableCell>
                        {infoRow.dtFinalizacaoEmprestimo
                          ? infoRow.dtFinalizacaoEmprestimo
                          : '-'}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    _id: PropTypes.number,
    idAluno: PropTypes.number.isRequired,
    nomeAluno: PropTypes.string.isRequired,
    idKits: PropTypes.arrayOf(PropTypes.number.isRequired),
    nomeKits: PropTypes.arrayOf(PropTypes.object.isRequired),
    status: PropTypes.string.isRequired,
    descricao: PropTypes.string,
    ocorrencia: PropTypes.string,
    dtEmprestimo: PropTypes.string.isRequired,
    alunoEmprestimo: PropTypes.object.isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        dtFinalizacaoEmprestimo: PropTypes.string,
        codigoMonitorEmprestimo: PropTypes.number.isRequired,
        nomeMonitorEmprestimo: PropTypes.string.isRequired,
        codigoMonitorFinalizacao: PropTypes.number,
        nomeMonitorFinalizacao: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable({
  emprestimos,
  rowClick,
  isSelectedRow,
  clickedRowId,
  searchEmprestimo,
  kits,
  usuarios,
  onClickObs,
}) {
  function createData(
    _id,
    idAluno,
    nomeAluno,
    codigoMonitorEmprestimo,
    nomeMonitorEmprestimo,
    nomeMonitorFinalizacao,
    codigoMonitorFinalizacao,
    idKits,
    nomeKits,
    status,
    descricao,
    ocorrencia,
    dtEmprestimo,
    dtFinalizacaoEmprestimo,
    alunoEmprestimo
  ) {
    return {
      _id,
      idAluno,
      nomeAluno,

      idKits,
      nomeKits,
      descricao: descricao ? descricao : null,
      ocorrencia: ocorrencia ? ocorrencia : null,
      dtEmprestimo: moment(dtEmprestimo).format('DD/MM/YY'),
      status,
      alunoEmprestimo,
      info: [
        {
          dtFinalizacaoEmprestimo: dtFinalizacaoEmprestimo
            ? moment(dtFinalizacaoEmprestimo).format('DD/MM/YY')
            : null,
          codigoMonitorEmprestimo,
          nomeMonitorEmprestimo,
          codigoMonitorFinalizacao: codigoMonitorFinalizacao
            ? codigoMonitorFinalizacao
            : null,
          nomeMonitorFinalizacao: nomeMonitorFinalizacao
            ? nomeMonitorFinalizacao
            : null,
        },
      ],
    };
  }

  let rows = [];
  // filtrar emprestimos por nome do aluno try
  let filteredEmprestimos = [];

  let searchAlunos = usuarios.filter((usuario) => {
    return usuario.nome
      ?.toLowerCase()
      .includes(searchEmprestimo?.toLowerCase());
  });
  // filtrar emprestimos por nome do aluno try

  emprestimos
    .filter((emprestimo) =>
      emprestimo.status.toLowerCase().includes(searchEmprestimo.toLowerCase())
    )
    .map((emprestimo) => {
      // let idKitsLength = emprestimo.idKits?.length;
      // let kitsEmprestimo = [];
      // for (let i = 0; i < idKitsLength; i++) {
      //   kitsEmprestimo.push(
      //     kits.filter((kit) => kit._id === emprestimo.idKits[i])
      //   );
      // }
      // let monitorEmprestimo = usuarios.filter((usuario) => {
      //   return usuario._id === emprestimo.codigoMonitorEmprestimo;
      // });
      // let monitorFinalizacao = usuarios.filter((usuario) => {
      //   return usuario._id === emprestimo.codigoMonitorFinalizacao;
      // });
      let alunoEmprestimo = usuarios.filter((usuario) => {
        return usuario._id === emprestimo.idAluno;
      });

      rows.push(
        createData(
          emprestimo._id,
          emprestimo.idAluno,
          emprestimo.nomeAluno,
          emprestimo.codigoMonitorEmprestimo,
          emprestimo.nomeMonitorEmprestimo,
          emprestimo.nomeMonitorFinalizacao,
          emprestimo.codigoMonitorFinalizacao,
          emprestimo.idKits,
          emprestimo.nomeKits,
          emprestimo.status,
          emprestimo.descricao,
          emprestimo.ocorrencia,
          emprestimo.dtEmprestimo,
          emprestimo.dtFinalizacaoEmprestimo,
          alunoEmprestimo
        )
      );
    });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Aluno</TableCell>
            <TableCell align="right">Kit</TableCell>
            <TableCell align="right">Data</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row
              isSelected={row._id === clickedRowId ? isSelectedRow : false}
              onClick={rowClick}
              key={row._id}
              row={row}
              onClickObs={onClickObs}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
