import axios from 'axios';

// Use local backend in development, production backend in production
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://onepage-backend.vercel.app'
  : 'http://localhost:5001';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;





