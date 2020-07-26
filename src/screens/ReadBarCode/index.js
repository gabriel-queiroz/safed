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
import { debounce } from 'throttle-debounce';

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

  const handleReadBarCode = (barcode) => {
    navigation.push('ReadQRCode', { barcode: barcode.data });
  };

  const handleError = (error) => {
    alert('O usuário não deu permissão');
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
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={debounce(2000, true, handleReadBarCode)}
          barCodeTypes={[RNCamera.Constants.BarCodeType.code128]}
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
