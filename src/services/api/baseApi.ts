import axios from 'axios';
import { getBaseApiEndpoint } from '../config';

export const baseApi = axios.create({
  baseURL: getBaseApiEndpoint(),
  headers: {
    'Content-Type': 'application/json',
  },
});
