const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://sandbox.btfssoter.io',
  /* other custom settings */
});

module.exports = axiosInstance;