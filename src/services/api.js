import axios from 'axios';

const url = {
  production: '',
  development: 'http://localhost:3333',
};

const api = axios.create({ baseURL: url.development });

export default api;
