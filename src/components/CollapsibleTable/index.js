import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { RowContainer } from './styles';
import produce from 'immer';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function Row({onClick, key, row, isSelected}) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow hover onClick={() => onClick(row)} selected={isSelected} className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
          <TableCell  component="th" scope="row">
            {row.nome}
          </TableCell>
          <TableCell  align="right">{row.codigo}</TableCell>
          <TableCell  align="right">{row.adm == 1 ? 'Administrador' : 'Padrão'} </TableCell>
      </TableRow>
        <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Dados do usuário
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Curso</TableCell>
                    <TableCell>CPF</TableCell>
                    <TableCell>Data de Nascimento</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.info.map((infoRow) => (
                    <TableRow key={infoRow.curso}>
                      <TableCell component="th" scope="row">
                        {infoRow.curso}
                      </TableCell>
                      <TableCell>{infoRow.cpf}</TableCell>
                      <TableCell align="right">{infoRow.dtNascimento}</TableCell>
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
    nome: PropTypes.string.isRequired,
    codigo: PropTypes.number.isRequired,
    adm: PropTypes.number.isRequired,
    _id: PropTypes.number.isRequired,
    info: PropTypes.arrayOf(
      PropTypes.shape({
        curso: PropTypes.number.isRequired,
        cpf: PropTypes.string.isRequired,
        dtNascimento: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable({usuarios, rowClick, isSelectedRow, clickedRowId, searchUsuario }) {

  function createData(nome, codigo, adm, curso, dtNascimento, _id, cpf) {
    return {
      nome,
      codigo,
      adm,
      _id,
      info: [
        { curso: curso, cpf: cpf, dtNascimento: dtNascimento },
      ],
    };
  }

  let rows = [];

  usuarios.filter((usuario) =>
    usuario.nome.toLowerCase().includes(searchUsuario.toLowerCase()))
    .map((usuario) => {
      rows.push(createData(usuario.nome, usuario.codigo, usuario.btAdm, usuario.curso, usuario.dtNascimento, usuario._id, usuario.cpf));
    })

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nome</TableCell>
            <TableCell align="right">Código</TableCell>
            <TableCell align="right">Perfil</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row  isSelected =
                              {
                                row._id === clickedRowId ? isSelectedRow : false 
                              }
                  onClick={rowClick}
                  key={row._id}
                  row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}