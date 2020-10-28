import React from 'react';

import { Container } from './styles';

import { Text } from '../Text';

function LabelContainer({
  text,
  children,
  marginLeft,
  marginTop,
  marginBottom,
  marginRight,
  margin,
  display,
  displayText,
  handleClick = (a) => a,
}) {
  return (
    <Container
      display={display}
      margin={margin}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginTop={marginTop}
      onClick={(event) => {
        event.stopPropagation();
        handleClick(event);
      }}
    >
      <Text
        text={displayText === 'none' ? '' : text}
        display={displayText}
        color={null}
        marginBottom="5px"
      />
      {children}
    </Container>
  );
}

export default LabelContainer;
