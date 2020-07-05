import styled from 'styled-components/native';
import { colors, Container as ContainerStyled } from '../../theme';

export const Container = styled(ContainerStyled)`
  justify-content: center;
  align-items: center;
`;

export const Loader = styled.ActivityIndicator.attrs({
  color: colors.primary,
  size: 'large',
})``;
