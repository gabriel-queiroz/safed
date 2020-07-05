import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import {
  Header,
  HeaderContent,
  UserData,
  Avatar,
  Text,
  Name,
  Menu,
  IconMenu,
  HeaderFooter,
  Title,
  IconScreen,
} from './styles';

const HeaderInspections = ({ navigation, title, iconIsCalendar }) => {
  return (
    <Header>
      <HeaderContent>
        <UserData>
          <TouchableOpacity>
            <Avatar />
          </TouchableOpacity>
          <Text>Olá,</Text>
          <Name>Gabriel</Name>
        </UserData>

        {/* <Menu onPress={() => MenuRef.current.showMenu()}>
          <DropDownMenu
            onPressConfig={handlePushConfigScreen}
            onPressExit={logout}
            ref={MenuRef}
          />
          <IconMenu />
        </Menu> */}
      </HeaderContent>
      <HeaderFooter>
        <Title>Usuários</Title>
        {/* <IconScreen source={iconIsCalendar ? Calendar : Location} /> */}
      </HeaderFooter>
    </Header>
  );
};

export default HeaderInspections;
