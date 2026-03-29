import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const API_URL = "http://localhost:8080/tasks";

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (title.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = {
      title: title,
      completed: false,
    };

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    loadTasks();
  };

  const toggleTask = async (task) => {
    const updatedTask = {
      ...task,
      completed: !task.completed,
    };

    await fetch(`${API_URL}/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    loadTasks();
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(task)}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;