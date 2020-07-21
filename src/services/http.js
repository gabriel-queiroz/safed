import axios from 'axios';
import StorageService from './storage';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

import { showMessage, Types, Duration } from './message';

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      showMessage({
        message: 'Sem conexão',
        description: 'Verifique sua conexão com a internet',
        type: Types.DANGER,
        floating: true,
        icon: 'danger',
        duration: Duration.large,
      });
    }
    if (error.response.status === 500) {
      showMessage({
        message: 'Ops, falha nossa!',
        description: 'Ocorreu um erro em nossos servidores',
        type: Types.DANGER,
        floating: true,
        icon: 'danger',
        duration: Duration.large,
      });
    }
    if (error.response.status === 401) {
      // AuthStore.logout();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

http.interceptors.request.use(
  async (request) => {
    const token = await StorageService.getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    request.headers['AUTH-TYPE'] = 'APP';
    return request;
  },
  (error) => {
    if (error.response.status === 401) {
      AuthStore.logout();
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default http;

