import { Dimensions } from 'react-native';

const windowWidth = () => {
  const width = Dimensions.get('window');
  if (width <= 350) {
    return '90%';
  }
  return '80%';
};

export const dimensions = {
  containerWidth: windowWidth(),
};
