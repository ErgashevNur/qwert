const TodoItem = ({ todo, setTodos }) => {
  const changeStatus = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  return (
    <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
      <h4>{todo.title}</h4>
      {!todo.completed && (
        <button
          onClick={() => changeStatus(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          Do <i class="fa-solid fa-check"></i>
        </button>
      )}
      {todo.completed && (
        <button
          onClick={() => changeStatus(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          Return <i class="fa-solid fa-rotate-left"></i>
        </button>
      )}

      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
    </li>
  );
};

export default TodoItem;
