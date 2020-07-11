import styled from 'styled-components/native';
import {
  TextInput,
  TouchableRipple,
  ActivityIndicator,
} from 'react-native-paper';
import { colors, Container as ContainerStyled } from '../../theme';

export const Container = styled(ContainerStyled)`
  align-items: stretch;
  width: 100%;
`;

export const Form = styled(ContainerStyled)`
  padding: 20px;
`;

export const Logo = styled.Image`
  margin: 0 auto;
`;

export const InputBarCode = styled(TextInput).attrs({
  underlineColor: colors.primary,
  theme: {
    colors: {
      text: colors.darkGray,
      primary: colors.darkBlue,
      underlineColor: colors.darkBlue,
    },
  },
})`
  margin: 10px 0px;
  height: 150px;
  background-color: ${colors.white};
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

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: 18px;
`;

export const Loading = styled(ActivityIndicator).attrs({
  color: colors.white,
  animating: true,
})``;
