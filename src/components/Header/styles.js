import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { colors, widthPercentageToDP, heightPercentageToDP } from '../../theme';
// import MenuIcon from '~/assets/images/menu.png';
// import IconUser from '~/assets/images/user.png';

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${widthPercentageToDP('4.5%')};
  color: ${colors.white};
`;

export const Header = styled.View`
  padding: ${heightPercentageToDP('1%')}px ${widthPercentageToDP('4%')}px;
  background-color: ${colors.darkBlue};
  height: ${heightPercentageToDP('10%')};
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
`;

export const UserData = styled(Animated.View)`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const HeaderFooter = styled.View`
  padding: 0px ${widthPercentageToDP('0.2%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999999999;
  height: ${heightPercentageToDP('8%')};
  border-radius: 20px;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-family: 'OpenSans-Regular';
  font-size: ${widthPercentageToDP('4%')}px;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-family: 'OpenSans-Bold';
  margin-left: 2px;
  font-size: ${widthPercentageToDP('4%')}px;
`;

export const IconScreen = styled.Image``;

export const Avatar = styled.Image.attrs({})`
  width: ${widthPercentageToDP('13%')}px;
  height: ${widthPercentageToDP('13%')}px;
  border-radius: ${widthPercentageToDP('13%') / 2}px;
  margin-right: ${widthPercentageToDP('3.9%')};
  background-color: ${colors.white};
`;

export const Menu = styled(BorderlessButton).attrs({
  rippleColor: colors.lightGray,
  hitSlop: { top: 20, bottom: 30, left: 20, right: 20 },
})`
  justify-content: center;
  align-items: center;
`;

export const IconMenu = styled.Image.attrs({})`
  width: 24px;
  height: 15px;
`;
