import React, { useState } from 'react';
import {
  Container,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  ButtonText,
  Loading,
  Form,
} from './styles';
import Header from '../../components/Header';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Header title="Novo Usuário" withGoBack />
      <Form>
        <InputEmail
          label="Nome *"
          onChangeText={(value) => setName(value)}
          value={name}
        />
        <InputEmail
          label="Email *"
          onChangeText={(value) => setEmail(value)}
          value={email}
          keyboardType="email-address"
        />
        <InputPassword
          label="Senha *"
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <ButtonSubmit onPress={() => {}}>
          {loading ? <Loading /> : <ButtonText> Entrar </ButtonText>}
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default UserForm;
