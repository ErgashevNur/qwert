import React, { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App border-2 p-12 rounded-2xl bg-gray-900">
      <div className="z-10">
        <h1 className="text-4xl font-bold mb-4">To-Do List</h1>
        <form onSubmit={addTask} className="mb-4">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Vazifa kiriting..."
            className="border p-3 rounded mr-2 bg-transparent"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded-md border-none"
          >
            Qo'shish
          </button>
        </form>

        <ul className="list-disc">
          {tasks.map((task, index) => (
            <li key={index} className="mb-2">
              <h3
                className={`border-2 rounded-md mb-3 p-2 font-bold text-2xl ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </h3>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => toggleTaskCompletion(index)}
                  className={`ml-4 px-3 py-2 border-none text-xl rounded-md ${
                    task.completed ? "bg-yellow-500" : "bg-green-500"
                  } text-white`}
                >
                  {task.completed ? "Qaytarish" : "Bajarildi"}
                </button>

                <button
                  onClick={() => deleteTask(index)}
                  className="ml-2 bg-red-500 text-white border-none px-3 py-2 text-xl rounded-md"
                >
                  O'chirish
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
