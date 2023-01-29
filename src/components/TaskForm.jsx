import { useState, useContext } from "react";
import { TaskContext } from "../contex/TaskContex";

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext);

  const [task, setTask] = useState({
    title: "",
    description: "",
    idDate: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    task.idDate = Date.now();
    addTask(task);

    setTask({
      title: "",
      description: "",
      idDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 mb-4 text-black rounded-md"
      />
      <input
        type="text"
        name="description"
        placeholder="Task description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 mb-4 text-black rounded-md"
      />
      <button type="submit" className="w-full p-2 bg-green-500 text-white"> Add</button>
    </form>
  );
}

