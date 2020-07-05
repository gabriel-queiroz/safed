import React from 'react';
import Routes from './routes';
import StorageService from './services/storage';

const App = () => {
  const isLogged = async () => {
    return StorageService.getToken();
  };
  return (
    <>
      <Routes isLogged={isLogged} />
    </>
  );
};

export default App;
