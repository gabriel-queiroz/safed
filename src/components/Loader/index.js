import React from 'react';
import { Container, Loader as LoaderComponent } from './styles';
import StatusBar from '../StatusBar';

const Loader = () => (
  <Container>
    <StatusBar />
    <LoaderComponent />
  </Container>
);

export default Loader;
