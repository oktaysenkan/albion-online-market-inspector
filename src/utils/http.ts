import axios from 'axios';

const http = axios.create({
  baseURL: 'https://www.albion-online-data.com/api/v2/',
});

export default http;
