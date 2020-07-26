import React, { useState } from 'react';
import {
  Container,
  InputEmail,
  ButtonSubmit,
  ButtonText,
  Loading,
  Content,
  Logo,
} from './styles';
import StatusBar from '../../components/StatusBar';
import Header from '../../components/Header';
import LogoVolks from '../../assets/icon.png';
import AuthService from '../../services/auth';
import { showMessage, Types } from '../../services/message';

const RecoveryPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await AuthService.resetPassword({ email });
      showMessage({
        message: 'Você receberá uma email com uma nova senha!',
        type: Types.SUCCESS,
      });
      navigation.goBack();
    } catch (error) {
      showMessage({
        message: 'Erro ao recuperar senha, verifique se o email está correto!',
        type: Types.DANGER,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <StatusBar />
      <Header
        title="Recuperação de senha"
        withGoBack
        onGoBacK={navigation.goBack}
      />

      <Content>
        <Logo source={LogoVolks} />
        <InputEmail
          label="Email *"
          onChangeText={(value) => setEmail(value)}
          value={email}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="done"
          keyboardType="email-address"
          onSubmitEditing={handleSubmit}
        />
        <ButtonSubmit onPress={handleSubmit}>
          {loading ? <Loading /> : <ButtonText> Recuperar </ButtonText>}
        </ButtonSubmit>
      </Content>
    </Container>
  );
};

export default RecoveryPassword;
