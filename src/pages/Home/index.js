import React from 'react';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/Navbar'

import {Container, HeaderContainer, FooterContainer, BodyContainer } from './styles';

function Home() {
  const history = useHistory();

  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default Home;
