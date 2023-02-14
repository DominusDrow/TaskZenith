import { useState, useContext } from "react";
import { TaskContext } from "../contex/TaskContex";
import ColorRadioButtons from "./radiobuttom";
import HorizontalInputList from "./TimeInput";
import { BsPlusLg } from "react-icons/bs";

export const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [isOpen, setIsOpen] = useState(false);

  const [task, setTask] = useState({
    idDate: "",
    title: "",
    priority: "",
    description: "",
    time: "",
    complete: false,
  });

  const [priority, setPriority] = useState("low");
  const [time, setTime] = useState("15min");

  const handlChildChangePriority = value => setPriority(value);
  const handlChildChangeTime = (value) => setTime(value);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);

    task.idDate = Date.now();
    task.priority = priority;
    task.time = time;
    addTask(task);

    setTask({
      idDate: "",
      title: "",
      priority: "",
      description: "",
      time: "",
      complete: false,
    });
  };

  return (
    <>
     <button className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 w-12 h-12 flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}>
        <BsPlusLg />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex items-center justify-center">
          <div className="m-auto max-w-xl bg-gray-700 rounded-lg shadow-lg p-4 w-full">
            <div className="flex justify-center items-center">
              <h3 className="text-lg font-bold text-white">Add Task</h3>
              <button
                className="text-white text-2xl font-bold ml-auto hover:text-gray-900"
                onClick={() => setIsOpen(!isOpen)}
              >
                ×
              </button>
            </div>
            <form className="mb-3" onSubmit={handleSubmit}>
              <div className="flex justify-between">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          onChange={handleChange}
          value={task.title}
          className="w-2/3 p-2 mb-4 text-black rounded-md inline"
          required
        />

        <ColorRadioButtons onChange={handlChildChangePriority} />
      </div>

      <input
        type="text"
        name="description"
        placeholder="Task description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 mb-4 text-black rounded-md"
      />

      <div className="flex w-full justify-center ">
        <HorizontalInputList onChange={handlChildChangeTime} />
      </div>

      <button type="submit" className="w-full p-2 bg-green-500 text-white mt-6"> Add</button>
    </form>
  </div>
</div>
)}

    </>
  );
}

