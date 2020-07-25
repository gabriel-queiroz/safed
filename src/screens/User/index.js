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
      };
      if (email !== auth.user.email) {
        data.email = password;
      }
      if (password) {
        data.password = password;
      }
      await UserService.update(auth.user.id, data);
      showMessage({
        message: 'Usuário atualizado com sucesso!',
        type: Types.SUCCESS,
      });
    } catch (error) {
      console.log(error.response.data);
      showMessage({
        message: 'Erro ao atualizar usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
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
          returnKeyType="next"
          onSubmitEditing={() => refInputEmail.current.focus()}
        />
        <InputEmail
          ref={refInputEmail}
          label="Email *"
          onChangeText={(value) => setEmail(value)}
          value={email}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => refInputPassword.current.focus()}
        />
        <InputPassword
          ref={refInputPassword}
          label="Senha"
          secureTextEntry
          autoCapitalize="none"
          returnKeyType="done"
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
