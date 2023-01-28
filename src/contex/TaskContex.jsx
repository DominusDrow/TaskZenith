import { createContext } from "react";
import { useState, useEffect } from "react";

import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

import { ref, child, push, update, get } from "firebase/database";
import { db } from "../firebase";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const dbRef = ref(db);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(user){
      get(child(dbRef, "tasks")).then((snapshot) => {
        if(snapshot.exists())
          setTasks(Object.values(snapshot.val()));
      })
    }
    else
      setTasks([]);
  }, [user]);

  const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => 
        setUser(result.user)
      )
      .catch((error) => 
        console.log(error)
      );
  };

  const logoutGoogle = () => {
    signOut(auth)
      .then(() => 
        setUser(null)
      )
      .catch((error) => 
        console.log(error)
      );
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
    const newTaskRef = push(child(ref(db), "tasks")).key;
    update(ref(db, "tasks/" + newTaskRef), task);
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
