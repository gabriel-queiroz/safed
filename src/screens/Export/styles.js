import styled from 'styled-components/native';
import { colors } from '../../theme';
import {
  TextInput,
  TouchableRipple,
  ActivityIndicator,
} from 'react-native-paper';
import { RadioButton as RadioButtonPaper } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${colors.darkGray};
  margin-bottom: 10px;
`;

export const RadioButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const RadioButtonTitle = styled.Text`
  font-size: 20px;
  color: ${colors.mediumGray};
`;

export const ButtonSubmit = styled(TouchableRipple).attrs({
  rippleColor: colors.darkBlue,
})`
  margin-top: 30px;
  background-color: ${colors.darkBlue};
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const RadioButton = styled(RadioButtonPaper).attrs({
  color: colors.darkBlue,
})``;

export const ContainerDatePicker = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DatePickerContainer = styled.View`
  width: 48%;
`;

export const DatePicker = styled.TouchableOpacity`
  width: 100%;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${colors.mediumGray};
  padding: 10px 10px;
`;

export const DatePickerValue = styled.Text`
  font-size: 18px;
  color: ${colors.mediumGray};
`;

export const DatePickerTitle = styled.Text`
  font-size: 18px;
  color: ${colors.mediumGray};
  margin-bottom: 5px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: 18px;
`;

export const Loading = styled(ActivityIndicator).attrs({
  color: colors.white,
  animating: true,
})``;
