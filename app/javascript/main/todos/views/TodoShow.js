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
    <div>
      <h1>{todo.title}</h1>
    </div>
  )
}

export default TodoShow;