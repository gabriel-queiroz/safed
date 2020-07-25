import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Header from '../../components/Header';
import styles from './styles';
import { colors } from '../../theme';
import _ from 'lodash';

export default function ReadBarCode({ navigation }) {
  const PendingView = () => (
    <>
      <SafeAreaView style={styles.safeTopContainerPreview} />
      <SafeAreaView style={styles.safeContainerPreview}>
        <View style={styles.PendingView}>
          <ActivityIndicator size="large" color={colors.lightBlue} />
        </View>
      </SafeAreaView>
    </>
  );

  const handleReadBarCode = async (data) => {
    console.log('entrou aqui');
    navigation.push('ReadQRCode', { barcode: data });
    // _.throttle(() => {

    // }, 500);
  };

  const handleError = (error) => {
    alert('O usuário não deu permissão');
    console.log(error);
  };

  return (
    <>
      <SafeAreaView style={styles.safeTopContainer} />
      <Header withMenu title="Ler código de Barra" />
      <SafeAreaView style={styles.safeContainer}>
        <RNCamera
          style={styles.preview}
          captureAudio={false}
          onMountError={handleError}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={handleReadBarCode}
          androidCameraPermissionOptions={{
            title: 'Permissão para usar a câmera',
            message: 'Precisamos da sua permissão para usar sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar',
          }}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <>
                <SafeAreaView style={styles.headerBottom}>
                  <TouchableOpacity
                    onPress={() => navigation.push('InputBarCode')}
                    style={styles.buttonCode}
                  >
                    <Text style={styles.buttonCodeTitle}>
                      Digitar o código de barra
                    </Text>
                  </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.content}>
                  <View style={styles.barCodeLine} />
                </SafeAreaView>
                <SafeAreaView style={styles.headerDescription}>
                  <Text style={styles.description}>
                    Posicione a linha verde sobre o código de barras e aguarde.
                    A leitura é automatica
                  </Text>
                </SafeAreaView>

                <SafeAreaView style={styles.headerTop}>
                  <Text style={styles.headerTitle}>
                    Leitor de codigo de barras
                  </Text>
                </SafeAreaView>
              </>
            );
          }}
        </RNCamera>
      </SafeAreaView>
    </>
  );
}
