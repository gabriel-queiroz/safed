import styled from 'styled-components/native';
import { colors } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Title = styled.Text`
  color: ${colors.darkBlue};
  font-size: 30px;
  font-weight: bold;
  margin-top: 70px;
`;

export const Content = styled.View`
  height: 200px;
  align-items: center;
`;

export const Qrcode = styled.View`
  flex: 3;
`;
