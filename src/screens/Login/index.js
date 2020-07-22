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
import { showMessage, Types } from '../../services/message';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    console.log('entrou');
    if (email && password) {
      console.log('entrou 222');
      setLoading(true);
      try {
        const { data } = await AuthService.login(email, password);
        StorageService.saveToken(data.access_token);
        showMessage({
          message: 'Bem vindo',
          type: Types.SUCCESS,
        });
        navigation.navigate('Login');
      } catch (error) {
        console.log('continua no error');
        console.log(error.response);
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
      {/* <Logo source={LogoImg} /> */}
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
