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
import UserService from '../../services/user';
import { showMessage, Types } from '../../services/message';

const UserForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const postUser = async (name, email, password) => {
    try {
      await UserService.post({ name, email, password });
      showMessage({
        message: 'Usuário criado com sucesso!',
        type: Types.SUCCESS,
      });
    } catch (error) {
      showMessage({
        message: 'Erro ao criar usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    }
  };

  const updateUser = async (id, name, email, password) => {
    try {
      showMessage({
        message: 'Usuário atualizado com sucesso!',
        type: Types.SUCCESS,
      });
      await UserService.update(id, { name, email, password });
    } catch (error) {
      showMessage({
        message: 'Erro ao atualizar usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    }
  };

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
