import axios from 'axios';

export const fetchTodos = async() => {
  const baseURL = "/api/v1/todos";
  return axios.get(baseURL).then(response => response.data)
};

export const fetchTodo = async(id) => {
  const baseURL = `/api/v1/todos/${id}`;
  return axios.get(baseURL).then(response => response.data)
};