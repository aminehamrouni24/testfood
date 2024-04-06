import axios from 'axios';

const backendUrl = 'http://192.168.1.14:5000'; // Your backend server address

const api = axios.create({
  baseURL: backendUrl,
  timeout: 5000, // Timeout in milliseconds (optional)
});

export default api;