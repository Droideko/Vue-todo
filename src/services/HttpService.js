import axios from 'axios';
import { APP_BASE_URL } from '../constants/app-base';

const interceptorsResponse = [
  response => (response.data),
  error => Promise.reject(error),
];

const interceptorsRequest = [
  request =>
  //     const { accessToken } = storage.getItem(KEY_SESSION);
  //     if (accessToken) {
  //       request.headers = {
  //          'Authorization': accessToken ? `Bearer ${accessToken}` : '',
  //       };
  //     }
    request,
  error => Promise.reject(error),
];

const HTTP = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

HTTP.interceptors.request.use(...interceptorsRequest);
HTTP.interceptors.response.use(...interceptorsResponse);

export default HTTP;

