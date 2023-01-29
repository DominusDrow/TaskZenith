import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";

export const CardTask = ({ task, index }) => {
  const { deleteTask, editTask } = useContext(TaskContext);
  return (
        <div
          className="bg-gray-700 p-6 mb-4 mt-4 flex justify-between items-center"
          key={index}
        >
          <div>
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div>
            <button
              className="bg-red-500 text-white p-2 rounded-md mr-2"
              onClick={() => deleteTask(task,index)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => editTask(task, index)}
            >
              Edit
            </button>
          </div>
        </div>
  );
};
