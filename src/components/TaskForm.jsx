import {useState, useEffect} from "react";

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  //useEffect(() => {
    //if (edit) {
      //setTask(edit);
    //}
  //}, [edit]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      console.log("edit");
      //editTask(task);
    } else {
      console.log("add");
      //addTask(task);
    }
    setTask({
      title: "",
      description: "",
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
      />
      <input
        type="text"
        name="description"
        placeholder="Task description"
        onChange={handleChange}
        value={task.description}
      />
      <button type="submit">{1===0 ? "Edit" : "Add"}</button>
    </form>
  );
}

