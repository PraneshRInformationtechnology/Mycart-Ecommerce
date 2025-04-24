import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // only if you're using cookies
});
console.log("Base URL:", process.env.REACT_APP_API_URL);

export default instance;
