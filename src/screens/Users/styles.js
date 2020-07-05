import styled from 'styled-components/native';
import { Animated, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { colors, widthPercentageToDP, heightPercentageToDP } from '../../theme';
// import MenuIcon from '~/assets/images/menu.png';
// import IconUser from '~/assets/images/user.png';

export const Bottom = styled.View`
  background-color: ${colors.darkBlue};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  align-items: center;
`;

export const ContainerAux = styled.View`
  background-color: ${colors.darkBlue};
  flex: 0;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
  },
})``;

export const Title = styled.Text`
  font-family: 'OpenSans-Bold';
  font-size: ${widthPercentageToDP('5.3%')};
  color: ${colors.white};
`;

export const Header = styled.View`
  padding: ${heightPercentageToDP('1%')}px ${widthPercentageToDP('4%')}px;
  background-color: ${colors.darkBlue};
  height: ${heightPercentageToDP('23%')};
  min-height: 180px;
`;

export const UserData = styled(Animated.View)`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderFooter = styled.View`
  padding: 0px ${widthPercentageToDP('0.2%')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 999999999;
  height: ${heightPercentageToDP('8%')};
`;

export const IconScreen = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Avatar = styled.Image.attrs({})`
  width: ${widthPercentageToDP('13%')}px;
  height: ${widthPercentageToDP('13%')}px;
  border-radius: ${widthPercentageToDP('13%') / 2}px;
  margin-right: ${widthPercentageToDP('3.9%')};
  background-color: ${colors.white};
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-family: 'OpenSans-Bold';
  font-size: ${widthPercentageToDP('4.5%')}px;
`;

export const Menu = styled(BorderlessButton).attrs({
  rippleColor: colors.regularGray,
  hitSlop: { top: 20, bottom: 30, left: 20, right: 20 },
})`
  justify-content: center;
  align-items: center;
`;

export const IconMenu = styled.Image.attrs({})`
  width: 24px;
  height: 15px;
`;

export const Content = styled.View`
  background-color: ${colors.almostWhite};
  flex: 3;
  width: 100%;
  align-items: center;
`;

export const ContentList = styled.View`
  flex: 1;
  background-color: ${colors.darkBlue};
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS === 'ios' ? heightPercentageToDP('4.6%') : 0};
`;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content',
  backgroundColor: colors.darkBlue,
})``;

export const List = styled.FlatList.attrs({
  ListHeaderComponentStyle: {
    backgroundColor: colors.darkBlue,
    width: '100%',
    margin: 0,
  },
  contentContainerStyle: { flexGrow: 1, backgroundColor: colors.almostWhite },
})``;
