import http from './http.js';

export default class ExportBarCode {
  static post(params) {
    return http.get(`/barcode/export/${params}`);
  }
}
