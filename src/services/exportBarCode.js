import http from './http.js';

export default class ExportBarCode {
  post(params) {
    return http.get(`/barcode/export/${params}`);
  }
}
