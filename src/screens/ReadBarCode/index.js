import React from 'react';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

export default function ReadBarCode() {
  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Waiting</Text>
    </View>
  );

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onBarCodeRead={(value) => console.log(value)}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <>
              <SafeAreaView style={styles.headerBottom}>
                <TouchableOpacity style={styles.buttonCode}>
                  <Text style={styles.buttonCodeTitle}>
                    {' '}
                    Digitar o código de barrass{' '}
                  </Text>
                </TouchableOpacity>
              </SafeAreaView>
              <SafeAreaView style={styles.content} />
              <SafeAreaView style={styles.headerDescription}>
                <Text style={styles.description}>
                  Posicione a linha verde sobre o código de barras e aguarde. A
                  leitura é automatica
                </Text>
              </SafeAreaView>

              <SafeAreaView style={styles.headerTop}>
                <Text style={styles.headerTitle}>
                  Leitor de codigo de barras
                </Text>
                {/* <TouchableOpacity
                onPress={() => takePicture(camera)}
                style={styles.capture}
              >
                <Text style={{ fontSize: 14 }}> SNAP </Text>
              </TouchableOpacity> */}
              </SafeAreaView>
            </>
          );
        }}
      </RNCamera>
    </SafeAreaView>
  );
}
