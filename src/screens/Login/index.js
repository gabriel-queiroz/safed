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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
      <ButtonSubmit onPress={() => {}}>
        {loading ? <Loading /> : <ButtonText> Entrar </ButtonText>}
      </ButtonSubmit>
    </Container>
  );
};

export default Login;
