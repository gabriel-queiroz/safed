import styled from 'styled-components/native';
import {
  TextInput,
  TouchableRipple,
  ActivityIndicator,
} from 'react-native-paper';
import { colors, Container as ContainerStyled } from '../../theme';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled(ContainerStyled)`
  align-items: stretch;
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export const Logo = styled.Image`
  margin: 0 auto;
`;

export const InputEmail = styled(TextInput).attrs({
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
  background-color: ${colors.white};
`;

export const InputPassword = styled(TextInput).attrs({
  underlineColor: colors.primary,
  theme: {
    colors: {
      text: colors.greyDark,
      primary: colors.darkBlue,
      underlineColor: colors.darkBlue,
    },
  },
})`
  margin: 10px 0px;
  background-color: ${colors.white};
`;

export const ButtonSubmit = styled(TouchableRipple).attrs({
  rippleColor: colors.darkBlue,
})`
  margin-top: 10px;
  background-color: ${colors.darkBlue};
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
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
