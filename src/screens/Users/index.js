import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import {
  Container,
  ContentList,
  List,
  ContainerAux,
  FloatButton,
  ContainerLoader,
  Loader,
} from './styles';
import ListItem from './listItem';
import Header from '../../components/Header';
import { colors } from '../../theme';
import UserService from '../../services/user';
import { showMessage, Types } from '../../services/message';

const Users = ({ navigation }) => {
  const [list, setList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingScroll, setLoadingScroll] = useState(false);
  const [pagination, setPagination] = useState({ page: 1 });
  const [finishedMessage, setFinishedMessage] = useState(false);
  const [networkError, setNetworkError] = useState(500);

  const deleteUser = async (userId) => {
    console.log(userId);
    try {
      await UserService.delete(userId);
      showMessage({
        message: 'Usuário excluido com sucesso!',
        type: Types.SUCCESS,
      });
    } catch (error) {
      showMessage({
        message: 'Erro ao excluir usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    }
  };

  const editUser = (user) => {
    console.log(user);
    navigation.push('UsersForm', user);
  };

  const renderItem = ({ item, index }) => (
    <ListItem data={item} onEdit={editUser} onDelete={deleteUser} />
  );

  const getUsers = async () => {
    try {
      const { data } = await UserService.getAll();
      setList(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getUsers(), []);

  return (
    <>
      <ContainerAux />
      <Container>
        <ContentList>
          <List
            keyExtractor={(item) => {
              return item.id;
            }}
            data={list}
            refreshing={loading}
            onRefresh={() => {}}
            renderItem={renderItem}
            onEndReached={() => {}}
            ListEmptyComponent={
              <ContainerLoader>
                <Loader />
              </ContainerLoader>
            }
            onEndReachedThreshold={0.1}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                title=""
                style={{
                  backgroundColor: colors.primary,
                }}
                onRefresh={() => {}}
                tintColor={colors.white}
              />
            }
            ListHeaderComponent={<Header withMenu title="Usuários" />}
          />
        </ContentList>
        <FloatButton
          onPress={() => {
            navigation.push('UsersForm');
          }}
        />
      </Container>
    </>
  );
};

export default Users;
