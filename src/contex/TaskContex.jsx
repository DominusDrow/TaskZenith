import { createContext } from "react";
import { useState, useEffect } from "react";

import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

import { ref, child, push, get, set } from "firebase/database";
import { db } from "../firebase";

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const dbRef = ref(db);
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(user){
      get(child(dbRef, "tasks/" + user.uid)).then((snapshot) => {
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
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
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
    set(ref(db, "tasks/" + user.uid + "/" + task.idDate), task);
    setTasks([...tasks, task]);
  };

  const deleteTask = (task,index) => {
    set(ref(db, "tasks/" + user.uid + "/" + task.idDate), null);
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const editTask = (task, index) => {
    setTasks(tasks.map((t, i) => (i === index ? task : t)));
  };

  const completeTask = (task, index) => {
    task.complete = !task.complete;
    set(ref(db, "tasks/" + user.uid + "/" + task.idDate), task);
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
        completeTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
