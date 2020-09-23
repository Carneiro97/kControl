import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import theme from '../../styles/theme';
import { Container } from './styles';


const RedSwitch = withStyles({
  switchBase: {
    color: theme.grey400,
    '&$checked': {
      color: theme.secondColor,
    },
    '&$checked + $track': {
      backgroundColor: theme.secondColor,
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function MySwitch({marginLeft, marginRight, onChange, checked}) {
  return (
      <Container marginLeft={marginLeft}>
        <FormControlLabel
        control={<RedSwitch checked={checked} onChange={onChange} name="checkedA" />}
        label="Login por CPF"    
        />
      </Container>
  );
}
