import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import {
  Container,
  ContentList,
  List,
  ContainerAux,
  FloatButton,
} from './styles';
import ListItem from './listItem';
import Header from '../../components/Header';
import { colors } from '../../theme';

const Users = ({ navigation }) => {
  const [list, setList] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const [loading, setLoading] = useState(false);
  const [loadingScroll, setLoadingScroll] = useState(false);
  const [pagination, setPagination] = useState({ page: 1 });
  const [finishedMessage, setFinishedMessage] = useState(false);
  const [networkError, setNetworkError] = useState(500);

  const renderItem = ({ item, index }) => <ListItem />;

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
