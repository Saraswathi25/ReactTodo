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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Form todos={todos} setTodos={setTodos} />
        {todos.length > 0 && <TodoList todos={todos} setTodos={setTodos} />}
      </main>
      <Footer completedTodos={completedTodos} total={total} />
    </div>
  );
}
