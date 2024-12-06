import { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./fOOTER.JSX";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done == true).length;
  const total = todos.length;
  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      {todos.length > 0 && <TodoList todos={todos} setTodos={setTodos} />}
      <Footer completedTodos={completedTodos} total={total} />
    </div>
  );
}
