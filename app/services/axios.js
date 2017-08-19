import axios from 'axios';

const config = {
  baseURL: process.env.BASE_URL,
};

export default axios.create(config);
