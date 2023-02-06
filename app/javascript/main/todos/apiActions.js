import axios from 'axios';

export const fetchTodos = async() => {
  const baseURL = "/api/v1/todos";
  return axios.get(baseURL).then(response => response.data)
};

export const updateTodoStatus = async(id, status) => {
  const baseURL = `/api/v1/todos/${id}`;
  return axios.patch(baseURL, {id: id, completed: status}).then(response => response.data)
};

export const fetchTodo = async(id) => {
  const baseURL = `/api/v1/todos/${id}`;
  return axios.get(baseURL).then(response => response.data)
};

export const createTodo = (todo) => {
  const baseURL = `/api/v1/todos`;
  axios.post(baseURL, todo)
  .then(function (response) {
    console.log(response);
    window.location.href = `/todos/${response.data.id}`;
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const deleteTodo = async(id) => {
  const baseURL = `/api/v1/todos/${id}`;
  return axios.delete(baseURL)
  .then(function (response) {
    console.log(response);
    window.location.href = `/todos`;
  })
  .catch(function (error) {
    console.log(error);
  });
};