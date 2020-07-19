import http from './http.js';

export default class AuthService {
  login(email, password) {
    return http.post('auth/login');
  }
  currentUser() {
    return http.get('/auth/user');
  }
}
