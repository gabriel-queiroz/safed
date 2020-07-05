import styled from 'styled-components/native';
import { Animated } from 'react-native';
import {
  colors,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../theme';

export const Container = styled(Animated.View).attrs({
  elevation: 7,
})`
  background-color: ${colors.white};
  border-radius: 20px;
  margin: ${widthPercentageToDP('3%')}px;
  padding: ${widthPercentageToDP('4%')}px;
  ${(props) =>
    props.first ? ` margin-top: ${heightPercentageToDP('-6%')}` : ''};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${heightPercentageToDP('1%')};
`;

const TextBase = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  color: ${colors.darkGray};
  font-family: 'Montserrat-Regular';
  font-size: ${widthPercentageToDP('3.7%')};
  font-family: 'Montserrat-Bold';
  color: #484848;
  flex: 1;
`;

export const HeaderTitle = styled(TextBase)`
  font-size: ${widthPercentageToDP('3.9%')};
  font-family: 'Montserrat-Bold';
  flex: 1;
`;

export const Email = styled(TextBase)`
  font-size: ${widthPercentageToDP('2.9%')};
  font-family: 'Montserrat-Bold';
  color: ${colors.mediumGray};
  flex: 1;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.View`
  align-items: flex-start;
  flex: 1;
`;

export const ColumnRight = styled.View`
  align-items: flex-end;
  flex: 0.7;
`;
