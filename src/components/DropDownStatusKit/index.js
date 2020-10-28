import React from 'react';

import {
  Dropdown,
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  Option,
} from '../Dropdown';

import LabelContainer from '../LabelContainer';

function DropDownStatusKit({
  onClick,
  headerText,
  maxHeight,
  status,
  name,
  disable,
  backgroundColor,
  marginBottom,
}) {
  return (
    <LabelContainer marginBottom={marginBottom} text="Status">
      <DropDownContainer disable={disable} backgroundColor={backgroundColor}>
        <DropDownHeader disable={disable} name={name}>
          {headerText}
        </DropDownHeader>
        <DropDownListContainer>
          <Dropdown maxHeight={maxHeight}>
            {Object.values(status).map((singleStatus, index) => (
              <Option
                key={`${index}_${singleStatus}`}
                onClick={onClick}
                text={singleStatus}
              />
            ))}
          </Dropdown>
        </DropDownListContainer>
      </DropDownContainer>
    </LabelContainer>
  );
}

export default DropDownStatusKit;
