import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, InputSearch, SearchIconContainer } from './styles';

function Inputsearch({
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
        >
            <InputSearch
                name={inputName}
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                height="40"
            />
            <SearchIconContainer>
                <MdSearch size="20" color="grey" />
            </SearchIconContainer>
        </Container>
    );
}

export default Inputsearch;
