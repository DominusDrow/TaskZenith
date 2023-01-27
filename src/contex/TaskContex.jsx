import { createContext } from "react";
import { useState } from "react";

import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

import { ref,set } from "firebase/database";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [user, setUser] = useState(null);
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

  const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoutGoogle = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        user,
        tasks,
        loginGoogle,
        logoutGoogle,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
