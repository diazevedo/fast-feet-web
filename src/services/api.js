import axios from 'axios';

const url = {
  production: '',
  development: 'http://localhost:3333',
  // development: 'http://10.0.0.20:3333',
};

const api = axios.create({ baseURL: url.development });

export default api;
