import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todos from "./todos/views/Todos";
import TodoShow from "./todos/views/TodoShow";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/todos/:id" element={<TodoShow />}  />
    </Routes>
  </Router>
);