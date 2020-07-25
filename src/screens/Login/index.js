import React, { useState } from 'react';
import {
  Logo,
  Container,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  ButtonText,
  Loading,
} from './styles';
import StatusBar from '../../components/StatusBar';
import AuthService from '../../services/auth';
import StorageService from '../../services/storage';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage, Types } from '../../services/message';
import { actions } from '../../store/ducks/auth';

const Login = ({ navigation }) => {
  const userData = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    if (email && password) {
      setLoading(true);
      try {
        const { data } = await AuthService.login(email, password);
        const token = data.access_token;
        StorageService.saveToken(token);
        showMessage({
          message: 'Bem vindo',
          type: Types.SUCCESS,
        });
        dispatch({ type: actions.LOAD_TOKEN, payload: token });
      } catch (error) {
        console.log('continua no error');
        console.log(error.response.data);
        showMessage({
          message: 'Erro na autenticação!',
          description: 'Verifique seus dados de acesso',
          type: Types.DANGER,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <StatusBar />
      <InputEmail
        label="Email *"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <InputPassword
        label="Senha *"
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
        value={password}
      />
      <ButtonSubmit onPress={handleFormSubmit}>
        {loading ? <Loading /> : <ButtonText> Entrar </ButtonText>}
      </ButtonSubmit>
    </Container>
  );
};

export default Login;
