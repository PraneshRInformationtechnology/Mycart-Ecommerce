import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mycart-ecommerce.onrender.com',
  withCredentials: true, // only if you're using cookies
});
console.log("Base URL:", process.env.REACT_APP_API_URL);

export default instance;
