import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { Container } from './styles';

const ButtonAdd = ({ onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <div className={classes.label}>
        <Fab size="small" onClick={onClick} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </Container>
  );
};

export default ButtonAdd;
