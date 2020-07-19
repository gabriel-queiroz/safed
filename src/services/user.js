import http from './http.js';

export default class UserService {
  static getAll() {
    return http.get('/user');
  }
  static post(data) {
    return http.post('/user', data);
  }
  static update(userId, data) {
    return http.put(`user/${userId}`, data);
  }
  static delete(userId) {
    return http.delete(`user/${userId}`);
  }
}
