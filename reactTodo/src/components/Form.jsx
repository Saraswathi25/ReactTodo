import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-6 mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex  gap-4 items-center">
        <input
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          className="input input-bordered w-full"
          placeholder="Enter a task"
        />
        <button className="btn bg-yellow-200 ">Add Task</button>
      </form>
    </div>
  );
}
