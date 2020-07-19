import http from './http.js';

export default class AuthService {
  static login(email, password) {
    return http.post('auth/login');
  }
  static currentUser() {
    return http.get('/auth/user');
  }
}
