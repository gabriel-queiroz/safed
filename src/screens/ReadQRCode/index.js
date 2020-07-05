import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ReadQRCode = () => {
  const handleButton = () => {};

  const onSuccess = async (e) => {
    console.log(e);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f43' }}>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker={true}
        checkAndroid6Permissions={true}
        cameraStyle={styles.cameraContainer}
      />
    </View>
  );
};

export default ReadQRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },

  touchable: {
    padding: 16,
  },

  text: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  cameraContainer: {
    height: Dimensions.get('window').height,
  },
});
