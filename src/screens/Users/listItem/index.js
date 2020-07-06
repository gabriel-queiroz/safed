import React from 'react';
import {
  Container,
  Header,
  HeaderTitle,
  Buttons,
  Button,
  ButtonIcon,
  Email,
} from './styles';
const listItem = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Gabriel</HeaderTitle>
        <Email>gabrielqueirozzn@gmail.com</Email>
      </Header>
      <Buttons>
        <Button>
          <ButtonIcon name="pencil" />
        </Button>
        <Button danger>
          <ButtonIcon name="trash" />
        </Button>
      </Buttons>
    </Container>
  );
};

export default listItem;
