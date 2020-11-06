import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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

export default function MySwitch({
  marginLeft,
  marginRight,
  onChange,
  checked,
  label,
}) {
  return (
    <Container marginLeft={marginLeft}>
      <FormControlLabel
        control={
          <RedSwitch checked={checked} onChange={onChange} name="checkedA" />
        }
        label={label}
      />
    </Container>
  );
}
