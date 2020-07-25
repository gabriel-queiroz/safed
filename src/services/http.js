import axios from 'axios';
import StorageService from './storage';

const http = axios.create({
  baseURL: 'https://app.safed.com.br/api',
});

http.interceptors.request.use(
  async (request) => {
    const token = await StorageService.getToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {},
);

export default http;
