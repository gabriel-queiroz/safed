import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  InputBarCode,
  ButtonSubmit,
  ButtonText,
  Loading,
  Form,
} from './styles';
import Header from '../../components/Header';
import StatusBar from '../../components/StatusBar';

const UserForm = ({ navigation }) => {
  const [barcode, setBarcode] = useState('');
  const inputRef = useRef();
  const handleSubmit = () => {
    navigation.push('ReadQRCode', { barcode });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Container>
      <StatusBar />
      <Header
        onGoBack={navigation.goBack}
        title="Insira o código de Barra"
        withGoBack
      />
      <Form>
        <InputBarCode
          ref={inputRef}
          label="Codigo de Barra *"
          onChangeText={(value) => setBarcode(value)}
          autoCorrect={false}
          value={barcode}
          onSubmitEditing={handleSubmit}
          autoCapitalize="none"
          returnKeyType="next"
          keyboardType="number-pad"
        />
        <ButtonSubmit onPress={handleSubmit}>
          <ButtonText> Continuar </ButtonText>
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default UserForm;
