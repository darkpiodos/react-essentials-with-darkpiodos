import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Do Exercise",
    "Take a Bath",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {}
  function moveTaskUp(index) {}
  function moveTaskDown(index) {}
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          className="to-do-input"
          type="text"
          placeholder="Enter new task ..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="todo-button add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button
              onClick={() => deleteTask(index)}
              className="delete-button todo-button"
            >
              Delete
            </button>
            <button
              onClick={() => moveTaskUp(index)}
              className="move-up-button todo-button"
            >
              Move Up
            </button>
            <button
              onClick={() => moveTaskDown(index)}
              className="move-down-button todo-button"
            >
              MoveDown
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
