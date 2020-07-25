import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Container, Title, Content, Qrcode } from './styles';
import Header from '../../components/Header';
const ReadQRCode = () => {
  const handleButton = () => {};

  const onSuccess = async (e) => {
    console.log(e);
  };

  return (
    <Container>
      <Header title="Ler qrcode" />
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
    </Container>
  );
};

export default ReadQRCode;
