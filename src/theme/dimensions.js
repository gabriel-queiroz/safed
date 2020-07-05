import { Dimensions, PixelRatio } from 'react-native';

const windowWidth = () => {
  const width = Dimensions.get('window');
  if (width <= 350) {
    return '90%';
  }
  return '80%';
};

export const widthPercentageToDP = (widthPercent) => {
  const screenWidth = Dimensions.get('window').width;

  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100,
  );
};

export const heightPercentageToDP = (heightPercent) => {
  const screenHeight = Dimensions.get('window').height;

  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100,
  );
};

export const dimensions = {
  containerWidth: windowWidth(),
};
