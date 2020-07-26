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
import { useSelector } from 'react-redux';

const User = () => {
  const auth = useSelector(({ auth }) => auth);
  const [email, setEmail] = useState(auth.user.email);
  const [name, setName] = useState(auth.user.name);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const refInputEmail = useRef(null);
  const refInputPassword = useRef(null);

  const updateUser = async () => {
    setLoading(true);
    try {
      if (!email) {
        return showMessage({
          message: 'Por favor, informe o seu email!',
          type: Types.DANGER,
        });
      }
      if (!name) {
        return showMessage({
          message: 'Por favor, informe o seu nome!',
          type: Types.DANGER,
        });
      }
      const data = {
        name,
        email,
      };
      if (password) {
        data.password = password;
      }
      await UserService.update(auth.user.id, data);
      showMessage({
        message: 'Usuário atualizado com sucesso!',
        type: Types.SUCCESS,
      });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errors &&
        error.response.data.errors.email &&
        error.response.data.errors.email[0] === 'validation.unique'
      ) {
        return showMessage({
          message: 'Email já utilizado!',
          description: 'Por favor, cadastre outro email',
          type: Types.DANGER,
        });
      }
      showMessage({
        message: 'Erro ao atualizar usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    } finally {
      setLoading(false);
      setPassword('');
    }
  };

  return (
    <Container>
      <Header title="Meu Perfil" withMenu />
      <Form>
        <InputEmail
          label="Nome *"
          onChangeText={(value) => setName(value)}
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => refInputEmail.current.focus()}
        />
        <InputEmail
          ref={refInputEmail}
          label="Email *"
          onChangeText={(value) => setEmail(value)}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => refInputPassword.current.focus()}
        />
        <InputPassword
          ref={refInputPassword}
          label="Senha"
          secureTextEntry
          autoCapitalize="none"
          returnKeyType="done"
          autoCorrect={false}
          onChangeText={(value) => setPassword(value)}
          value={password}
          onSubmitEditing={updateUser}
        />
        <ButtonSubmit onPress={updateUser}>
          {loading ? (
            <Loading />
          ) : (
            <ButtonText> Alterar Informações </ButtonText>
          )}
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default User;
