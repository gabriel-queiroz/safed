import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = 'viimo@authToken';
const USER_KEY = 'viimo@authUser';

export default class StorageService {
  static async saveToken(token) {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  }

  static getToken() {
    return AsyncStorage.getItem(TOKEN_KEY);
  }
  static async removeToken() {
    await AsyncStorage.removeItem(TOKEN_KEY);
  }
}
