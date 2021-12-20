import axios from 'axios';
import { Endpoints } from './index';

const axiosInstance = axios.create({
  baseURL: Endpoints.url
});

export default axiosInstance;