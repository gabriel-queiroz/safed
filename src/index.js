import React, { useEffect, useState } from 'react';
import Routes from './routes';
import StorageService from './services/storage';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Loader';
import { Container } from './theme';
import StatusBar from './components/StatusBar';
import { actions } from './store/ducks/auth';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './theme';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.darkBlue,
    },
  };
  const authReducer = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    StorageService.getToken()
      .then((tokenData) => {
        console.log(tokenData);
        if (!tokenData) {
          console.log('ahhdhd');
          return dispatch({ type: actions.CHANGE_LOADER, payload: false });
        }
        // dispatch({ action: actions.LOAD_TOKEN, payload: tokenData });
      })
      .catch((error) => {
        dispatch({ type: actions.CHANGE_LOADER, payload: false });
      });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Container>
        <>
          {authReducer.loading ? (
            <Loader />
          ) : (
            <>
              <StatusBar />
              <Routes isLogged={authReducer.token} />
            </>
          )}
          <FlashMessage position="top" />
        </>
      </Container>
    </PaperProvider>
  );
};

export default App;
