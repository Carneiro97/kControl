import React from 'react';
import { MdSearch } from 'react-icons/md';
import  Input  from '../Input' 

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
        </Container>
    );
}

export default InputSearch;
