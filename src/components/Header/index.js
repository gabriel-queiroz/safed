import React, { useState } from 'react';
import { Appbar, Menu, Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/ducks/auth';
import { Header as HeaderCom } from './styles';
import StorageService from '../../services/storage';

const Header = ({ withGoBack, title, withMenu, onGoBack = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const logout = () => {
    StorageService.removeToken();
    dispatch({ type: actions.LOAD_TOKEN, payload: null });
  };

  return (
    <HeaderCom>
      {withGoBack && <Appbar.BackAction onPress={onGoBack} />}
      <Appbar.Content title={title} />
      {withMenu && (
        <Menu
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              color="#fff"
              onPress={() => setMenuOpen(true)}
            />
          }
          visible={menuOpen}
          onDismiss={() => setMenuOpen(false)}
        >
          <Menu.Item onPress={() => {}} title="Alterar Senha" />
          <Divider />
          <Menu.Item onPress={logout} title="Sair" />
        </Menu>
      )}
    </HeaderCom>
  );
};

export default Header;
