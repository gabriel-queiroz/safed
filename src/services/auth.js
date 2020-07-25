import http from './http.js';

export default class AuthService {
  static login(email, password) {
    return http.post('auth/login', { email, password });
  }
  static currentUser() {
    return http.get('/auth/user');
  }
  static resetPassword(data) {
    return http.post('/password/reset', data);
  }
}
