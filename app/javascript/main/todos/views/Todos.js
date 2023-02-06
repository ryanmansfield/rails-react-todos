import React, { useEffect, useState } from 'react';
import { fetchTodos } from "../apiActions"
import TodoCard from "../components/TodoCard";

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
      <h1>My Todos</h1>
      <div className="todos-container">
        {todos.map(todo =>
        <div className="todo-card-container" key={todo.id}>
          <TodoCard todo={todo}/>
        </div>
        )}

      </div>
    </div>
  )
}

export default Todos;
