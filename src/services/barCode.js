import http from './http.js';

export default class UserService {
  static post(data) {
    return http.post('/barcode', data);
  }
}
