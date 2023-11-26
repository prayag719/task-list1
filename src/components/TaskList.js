// TaskList.js
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
