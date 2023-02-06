import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { updateTodoStatus } from "../apiActions"

const TodoCard = ({todo}) => {
  return (
    <div className="todo-card">
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => updateTodoStatus(todo.id, !todo.completed)}
          />
          <span>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
          </span>
        </label>
      </div>
      <div>
        <span>{todo.description}</span>
      </div>
      <div>
        <span>Due: {todo.due_date}</span>
      </div>
    </div>
  )
};

export default TodoCard;