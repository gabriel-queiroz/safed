import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = 'viimo@authToken';
const USER_KEY = 'viimo@authUser';

export default class StorageService {
  static async saveUser(user) {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  static async getUser() {
    const user = await AsyncStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  static async removeUser() {
    await AsyncStorage.removeItem(USER_KEY);
  }

  static async saveToken(token) {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  }

  static async getToken() {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  }

  static async removeToken() {
    await AsyncStorage.removeItem(TOKEN_KEY);
  }
}
