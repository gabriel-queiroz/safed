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
const listItem = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Header>
        <HeaderTitle>{data.name}</HeaderTitle>
        <Email>{}data.email</Email>
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
