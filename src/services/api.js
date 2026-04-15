import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const handleApiError = (error, fallbackMessage) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (error.code === 'ERR_NETWORK') {
    return 'Unable to connect to the server. Please check if the backend is running.';
  }

  return fallbackMessage;
};
