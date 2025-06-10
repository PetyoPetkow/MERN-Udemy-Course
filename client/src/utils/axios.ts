import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: '/api/v1',
});

export default axios;
