import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  return (
    <div className="text-center mt-8 bg-[#5f9ea0] pb-10">
      <h1 className="text-4xl font-bold text-white pt-10 mb-4">Todo List</h1>
      <div className="flex mb-4 max-w-[700px] mx-auto">
        <input
          type="text"
          className="w-full border rounded py-2 px-3 outline-none"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="ml-2 bg-slate-400 hover:bg-slate-500 transition-all duration-300 ease-linear text-white font-bold py-2 px-6 rounded"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul className="flex flex-col-reverse max-w-[700px] mx-auto">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <p className="w-full text-start text-2xl font-bold text-black">{task}</p>
            <button
              className="text-white bg-black px-2 py-2 rounded transition-all duration-300 ease-linear"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
