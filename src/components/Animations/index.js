import React from 'react';

import { Container } from './styles';

function Animations({ children, hasFadeIn, hasFadeOut, allFade, translate }) {
  return (
    <Container
      hasFadeIn={hasFadeIn}
      hasFadeOut={hasFadeOut}
      translate={translate}
    >
      {children}
    </Container>
  );
}

export default Animations;
