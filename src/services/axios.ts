import axios from 'axios';
import { baseUrl } from '../config';

export const api = axios.create({
  baseURL: baseUrl,
});
