import React, { useState } from 'react';
import {
  Container,
  InputBarCode,
  ButtonSubmit,
  ButtonText,
  Loading,
  Form,
} from './styles';
import Header from '../../components/Header';

const UserForm = () => {
  const [barCode, setBarCode] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header title="Insira o código de Barra" withGoBack />
      <Form>
        <InputBarCode
          label="Codigo de Barra *"
          onChangeText={(value) => setBarCode(value)}
          value={barCode}
          multiline={true}
        />
        <ButtonSubmit onPress={() => {}}>
          {loading ? <Loading /> : <ButtonText> Continuar </ButtonText>}
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default UserForm;
