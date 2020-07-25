import React, { useState } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  Container,
  Title,
  Content,
  Qrcode,
  ContainerLoader,
  Loader,
  LoaderMessage,
} from './styles';
import Header from '../../components/Header';
import Dialog from 'react-native-dialog';
const ReadQRCode = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);

  const onSuccess = async (e) => {
    setLoading(true);
  };

  return (
    <Container>
      <Header withGoBack onGoBack={navigation.goBack} title="Ler qrcode" />
      <Content>
        <Title>Aponte o QRCODE</Title>
      </Content>
      <Qrcode>
        <QRCodeScanner
          onRead={onSuccess}
          showMarker={true}
          checkAndroid6Permissions={true}
          cameraStyle={{ height: '100%', width: '100%' }}
        />
      </Qrcode>
      <Dialog.Container visible={loading}>
        <Dialog.Title>Carregando...</Dialog.Title>
        <ContainerLoader>
          <Loader />
          <LoaderMessage>Enviar dados para o servidor</LoaderMessage>
        </ContainerLoader>
      </Dialog.Container>
    </Container>
  );
};

export default ReadQRCode;
