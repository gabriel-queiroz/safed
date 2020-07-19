import http from './http.js';

export default class UserService {
  post(data) {
    return http.post('/barcode', data);
  }
}
