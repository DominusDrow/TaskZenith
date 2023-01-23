import { createContext } from "react";
import { useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [tasks, setTasks] = useState([
    {
      title: "Task 1",
      description: "Task 1 description",
    },
    {
      title: "Task 2",
      description: "Task 2 description",
    },
    {
      title: "Task 3",
      description: "Task 3 description",
    },
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const editTask = (task, index) => {
    setTasks(tasks.map((t, i) => (i === index ? task : t)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
