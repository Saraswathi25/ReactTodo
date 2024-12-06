import style from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const className = item.done ? style.completed : "";
  return (
    <div className="flex justify-between items-center gap-4 ">
      <h3 className={className} onClick={() => handleClick(item.name)}>
        {item.name}
      </h3>
      <span>
        <button className="btn btn-error" onClick={() => handleDelete(item)}>
          X
        </button>
      </span>
    </div>
  );
}
