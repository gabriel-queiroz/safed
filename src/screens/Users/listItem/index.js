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
const listItem = ({ data, onEdit, onDelete }) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>{data.name}</HeaderTitle>
        <Email>{data.email}</Email>
      </Header>
      <Buttons>
        <Button onPress={() => onEdit(data)}>
          <ButtonIcon name="pencil" />
        </Button>
        <Button danger onPress={() => onDelete(data.id)}>
          <ButtonIcon name="trash" />
        </Button>
      </Buttons>
    </Container>
  );
};

export default listItem;
