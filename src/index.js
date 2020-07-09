import React, { useEffect, useState } from 'react';
import Routes from './routes';
import StorageService from './services/storage';
import Loader from './components/Loader';
import { Container } from './theme';
import StatusBar from './components/StatusBar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './theme';

const App = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.darkBlue,
    },
  };

  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    StorageService.getToken()
      .then((tokenData) => {
        console.log(token);
        setToken(tokenData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <StatusBar />
            <Routes isLogged={!token} />
          </>
        )}
      </Container>
    </PaperProvider>
  );
};

export default App;
