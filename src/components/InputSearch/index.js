import React from 'react';
import { MdSearch } from 'react-icons/md';
import Input from '../Input';
import ButtonAdd from '../../components/ButtonAdd';

import { Container, SearchIconContainer } from './styles';

function InputSearch({
  inputName,
  value,
  handleChange,
  width,
  placeholder,
  margin,
  padding,
  justifyContent,
  marginTop,
  hideAddButton,
  onClickButtonAdd,
}) {
  return (
    <Container
      padding={padding}
      justifyContent={justifyContent}
      margin={margin}
      marginTop={marginTop}
      width={width}
    >
      <Input
        name={inputName}
        value={value}
        handleChange={(e) => handleChange(e)}
        placeholder={placeholder}
        height="40px"
        width={width}
      />
      <SearchIconContainer>
        <MdSearch size="20" color="grey" />
      </SearchIconContainer>
      {hideAddButton ? null : <ButtonAdd onClick={onClickButtonAdd} />}
    </Container>
  );
}

export default InputSearch;
