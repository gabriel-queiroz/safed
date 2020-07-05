import React, { useEffect, useState } from 'react';
import Routes from './routes';
import StorageService from './services/storage';
import Loader from './components/Loader';
import { Container } from './theme';

const App = () => {
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
    <Container>
      {isLoading ? <Loader /> : <Routes isLogged={!token} />}
    </Container>
  );
};

export default App;
