import React, { useState, useRef } from 'react';
import {
  Logo,
  Container,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  ButtonText,
  Loading,
  TouchableRecovery,
  TouchableRecoveryTitle,
} from './styles';
import StatusBar from '../../components/StatusBar';
import AuthService from '../../services/auth';
import StorageService from '../../services/storage';
import { useSelector, useDispatch } from 'react-redux';
import { showMessage, Types } from '../../services/message';
import { actions } from '../../store/ducks/auth';
import LogoVolks from '../../assets/icon.png';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const refInputPassword = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    if (email && password) {
      setLoading(true);
      try {
        const { data } = await AuthService.login(email, password);
        const token = data.access_token;
        await StorageService.saveToken(token);
        showMessage({
          message: 'Bem vindo',
          type: Types.SUCCESS,
        });
        dispatch({ type: actions.LOAD_TOKEN, payload: token });
      } catch (error) {
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
      <Logo source={LogoVolks} />
      <InputEmail
        label="Email *"
        onChangeText={(value) => setEmail(value)}
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="next"
        keyboardType="email-address"
        onSubmitEditing={() => refInputPassword.current.focus()}
      />
      <InputPassword
        ref={refInputPassword}
        label="Senha *"
        secureTextEntry
        returnKeyType="done"
        onChangeText={(value) => setPassword(value)}
        value={password}
        onSubmitEditing={handleFormSubmit}
      />
      <TouchableRecovery onPress={() => navigation.push('RecoveryPassword')}>
        <TouchableRecoveryTitle>Esqueceu sua senha?</TouchableRecoveryTitle>
      </TouchableRecovery>
      <ButtonSubmit onPress={handleFormSubmit}>
        {loading ? <Loading /> : <ButtonText> Entrar </ButtonText>}
      </ButtonSubmit>
    </Container>
  );
};

export default Login;
