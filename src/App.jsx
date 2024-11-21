import { useState } from "react";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Do Homework",
      completed: false,
    },

    {
      id: 2,
      title: "Do Traing to GYM",
      completed: true,
    },
  ]);
  return (
    <>
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
export default App;
