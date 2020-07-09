import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Header as HeaderCom } from './styles';

const Header = ({ withGoBack, title, withMenu }) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <HeaderCom>
      {withGoBack && <Appbar.BackAction onPress={_goBack} />}
      <Appbar.Content title={title} />
      {withMenu && <Appbar.Action icon="dots-vertical" onPress={_handleMore} />}
    </HeaderCom>
  );
};

export default Header;
