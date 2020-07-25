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
import { StackActions } from '@react-navigation/native';
import BarCodeService from '../../services/barCode';
import { showMessage, Types } from '../../services/message';

const ReadQRCode = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const { barcode } = route.params;

  const onSuccess = async ({ data }) => {
    setLoading(true);
    try {
      await BarCodeService.post({
        codes: [{ chassi: barcode, connectCar: data }],
      });
      showMessage({
        message: 'Codigo salvo com sucesso!',
        description: 'Verifique seus dados de acesso',
        type: Types.DANGER,
      });
      setLoading(false);
      navigation.dispatch(StackActions.replace('ReadBarCode'));
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      showMessage({
        message: 'Ops! aconteceu um erro ao salvar',
        type: Types.DANGER,
      });
    }
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
