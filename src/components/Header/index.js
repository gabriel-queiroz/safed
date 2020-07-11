import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Header as HeaderCom } from './styles';

const Header = ({ withGoBack, title, withMenu, onGoBack = () => {} }) => {
  const _handleMore = () => console.log('Shown more');

  return (
    <HeaderCom>
      {withGoBack && <Appbar.BackAction onPress={onGoBack} />}
      <Appbar.Content title={title} />
      {withMenu && <Appbar.Action icon="dots-vertical" onPress={_handleMore} />}
    </HeaderCom>
  );
};

export default Header;
