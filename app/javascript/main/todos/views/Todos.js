import React, { useEffect, useState } from 'react';
import { fetchTodos } from "../apiActions"

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos()
    .then(data => {
        setTodos(data)
    })
    .catch(err => console.log(err))
  }, []);
  return(
    <div>
      <h1>Todos</h1>
      {todos.map(todo =>
        <p key={todo.id}>{todo.title}</p>
      )}
    </div>
  )
}

export default Todos;
