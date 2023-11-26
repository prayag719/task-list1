// Task.js
import React, { useState } from "react";
import "./Task.css"; // Import your CSS file

const Task = ({ task, onDeleteTask, onUpdateTask }) => {
  const { id, name, completed } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(name);

  const handleUpdateTask = () => {
    setIsEditing(false);
    onUpdateTask(id, updatedTaskName);
  };

  const handleToggleCompletion = () => {
    onUpdateTask(id, name, !completed);
  };

  return (
    <li className={completed ? "completed-task" : ""}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTaskName}
            onChange={(e) => setUpdatedTaskName(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleUpdateTask} className="save-button">
            Save
          </button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggleCompletion}
          />
          <span>{name}</span>
          <button onClick={() => onDeleteTask(id)} className="delete-button">
            Delete
          </button>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Edit
          </button>
        </div>
      )}
    </li>
  );
};

export default Task;
