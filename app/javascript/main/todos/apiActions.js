import axios from 'axios';

export const fetchTodos = async() => {
  const baseURL = "/api/v1/todos";
  return axios.get(baseURL).then(response => response.data)
};
