import TodoItem from "./TodoItem";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-6 mx-auto mt-10">
      <div className="flex flex-col items-center gap-4 mt-6">
        {sortedTodos.map((todo) => (
          <div
            key={todo.name}
            className="card bg-base-100 shadow-md p-4 w-full max-w-xs"
          >
            <TodoItem item={todo} todos={todos} setTodos={setTodos} />
          </div>
        ))}
      </div>
    </div>
  );
}
