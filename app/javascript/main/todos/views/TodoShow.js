import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTodo } from "../apiActions"

function TodoShow() {
  const { id }= useParams();
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchTodo(id)
    .then(data => {
        setTodo(data)
    })
    .catch(err => console.log(err))
  }, []);
  return(
    <div className="todo-card">
      <div>
        <h1>{todo.title}</h1>
      </div>
      <div>
        <span>Completed: {todo.completed ? "True" : "False"}</span>
      </div>
      <div>
        <span>Description: {todo.description}</span>
      </div>
      <div>
        <span>Due: {todo.due_date}</span>
      </div>
    </div>
  )
}

export default TodoShow;