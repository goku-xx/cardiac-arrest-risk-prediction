// backend/utils/axiosClient.js
const axios = require("axios");

const apiClient = axios.create({
  baseURL: "http://localhost:8000", // Python ML API URL
  timeout: 5000,
});

module.exports = apiClient;
