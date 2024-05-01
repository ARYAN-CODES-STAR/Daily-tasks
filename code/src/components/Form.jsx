import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing icons from react-icons library

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // State to store the index of the task being edited
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the popup

  const addingTask = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      if (editIndex !== null) {
        // If editIndex is not null, update the task at the specified index
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(null); // Reset editIndex after updating the task
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

    // Check if all tasks are deleted
    if (updatedTasks.length === 0) {
      setShowPopup(true); // Show the celebration popup
    }
  };

  const editTask = (index) => {
    setEditIndex(index); // Set the index of the task being edited
    setTask(tasks[index]); // Populate the input field with the task text for editing
  };

  return (
    <div className="max-w-md mx-auto p-9 bg-slate-900 rounded-lg border-2 border-emerald-500 relative">
      <h2 className="text-lg font-semibold mb-4 flex items-center justify-center">
        What's the Plan for Today?
      </h2>
      <form className="flex items-center" onSubmit={addingTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          className="border bg-slate-800 mt-4 border-gray-300 px-4 py-2 mr-2 rounded-md flex-grow"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="text-emerald-600 text-4xl bg-slate-900 px-2 py-1 rounded-md border-1 border-emerald-500"
        >
          +
        </button>
      </form>
      <ul className="mt-5 list-none">
        {" "}
        {/* Apply list-none class to remove default list style */}
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-green-600 py-2"
          >
            <span>{task}</span>
            <div>
              <div className="flex gap-2">
                {" "}
                <FaEdit
                  className="text-blue-500 cursor-pointer"
                  onClick={() => editTask(index)}
                />{" "}
                {/* Edit icon */}
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => deleteTask(index)}
                />{" "}
                {/* Delete icon */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-black p-6 rounded-lg">
            <span role="img" aria-label="Party Emoji" className="text-4xl ">
              🎉🎊
            </span>
            <p className="text-xl mt-4">
              All tasks completed! It's time to celebrate!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
