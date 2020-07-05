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
      <ButtonSubmit onPress={() => {}}>
        {loading ? <Loading /> : <ButtonText> Recuperar </ButtonText>}
      </ButtonSubmit>
    </Container>
  );
};

export default Login;
