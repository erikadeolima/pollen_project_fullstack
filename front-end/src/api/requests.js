import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestUpdate = async (endpoint, body) => {
  const { data } = await api.patch(endpoint, body);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestPost = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint, body) => {
  const { data } = await api.delete(endpoint, body);
  return data;
};

export default api;