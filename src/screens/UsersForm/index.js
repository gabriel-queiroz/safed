import React, { useState, useRef } from 'react';
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

const UserForm = ({ navigation, route }) => {
  const user = route.params ? route.params : { name: '', email: '' };
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const refInputEmail = useRef(null);
  const refInputPassword = useRef(null);

  const postUser = async () => {
    if (!name) {
      return showMessage({
        message: 'por favor, informe o nome.',
        type: Types.DANGER,
      });
    }

    if (!email) {
      return showMessage({
        message: 'por favor, informe o email.',
        type: Types.DANGER,
      });
    }
    if (!password) {
      return showMessage({
        message: 'por favor, informe a senha.',
        type: Types.DANGER,
      });
    }
    setLoading(true);
    const data = {
      name,
      email,
      password,
    };
    try {
      await UserService.post(data);
      showMessage({
        message: 'Usuário criado com sucesso!',
        type: Types.SUCCESS,
      });
      navigation.goBack();
    } catch (error) {
      showMessage({
        message: 'Erro ao criar usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    } finally {
      setLoading(true);
    }
  };

  const updateUser = async () => {
    if (!name) {
      return showMessage({
        message: 'por favor, informe o nome.',
        type: Types.DANGER,
      });
    }

    if (!email) {
      return showMessage({
        message: 'por favor, informe o email.',
        type: Types.DANGER,
      });
    }
    setLoading(true);
    try {
      showMessage({
        message: 'Usuário atualizado com sucesso!',
        type: Types.SUCCESS,
      });
      const data = {
        name,
        email,
      };
      await UserService.update(user.id, data);
      navigation.goBack();
    } catch (error) {
      showMessage({
        message: 'Erro ao atualizar usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    } finally {
      setLoading(false);
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
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => refInputEmail.current.focus()}
        />
        <InputEmail
          ref={refInputEmail}
          label="Email *"
          onChangeText={(value) => setEmail(value)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => refInputPassword.current.focus()}
        />
        <InputPassword
          ref={refInputPassword}
          label="Senha *"
          secureTextEntry
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <ButtonSubmit
          onPress={() => (route.params ? updateUser() : postUser())}
        >
          {loading ? <Loading /> : <ButtonText> Entrar </ButtonText>}
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default UserForm;
