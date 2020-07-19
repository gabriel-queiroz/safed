import http from './http.js';

export default class UserService {
  get() {
    return http.get('/user');
  }
  post(data) {
    return http.post('/user', data);
  }
  update(userId, data) {
    return http.put(`user/${userId}`, data);
  }
  delete(userId) {
    return http.delete(`user/${userId}`);
  }
}
