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
  ContainerLoaderScroll,
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
  const [pagination, setPagination] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const deleteUser = async (userId) => {
    try {
      setLoading(true);
      await UserService.delete(userId);
      showMessage({
        message: 'Usuário excluido com sucesso!',
        type: Types.SUCCESS,
      });
      await getUsers(1);
    } catch (error) {
      showMessage({
        message: 'Erro ao excluir usuário!',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
      });
    } finally {
      setLoading(false);
    }
  };

  const editUser = (user) => {
    console.log(user);
    navigation.push('UsersForm', user);
  };

  const handlePage = () => {
    const page = pagination + 1;
    if (page <= lastPage) {
      setLoadingScroll(true);
      getUsers(page, () => setPagination(page));
    }
  };

  const renderItem = ({ item, index }) => (
    <ListItem data={item} onEdit={editUser} onDelete={deleteUser} />
  );

  renderFooter = () => {
    if (!loadingScroll) return null;
    return (
      <ContainerLoaderScroll>
        <Loader />
      </ContainerLoaderScroll>
    );
  };

  const getUsers = async (page, isPaged = false, callback = () => {}) => {
    try {
      const { data } = await UserService.getAll(page);
      setLastPage(data.data.last_page);
      if (isPaged) {
        setList([...list, ...data.data.data]);
      } else {
        setList(data.data.data);
      }
      callback();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setLoadingScroll(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUsers(1);
    });
    return unsubscribe;
  }, []);

  useEffect(() => getUsers(1), [navigation]);
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
            renderItem={renderItem}
            onEndReached={handlePage}
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
                onRefresh={() => {
                  setLoading(true);
                  getUsers(1, false);
                }}
                tintColor={colors.white}
              />
            }
            ListHeaderComponent={<Header withMenu title="Usuários" />}
            ListFooterComponent={renderFooter}
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
