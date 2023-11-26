// AddTaskForm.js
import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: Date.now(),
        name: newTask,
        completed: false,
      };

      onAddTask(task);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task name"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;
