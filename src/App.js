// App.js
import React, { useState } from "react";
// App.js
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedName, completed) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: updatedName, completed } : task
      )
    );
  };

  

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
    </div>
  );
};

export default App;
