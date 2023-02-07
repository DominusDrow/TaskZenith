import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdPriorityHigh } from "react-icons/md";


export const CardTask = ({ task, index }) => {
  const { deleteTask, editTask, completeTask } = useContext(TaskContext);

  return (
        <div
          className="bg-gray-700 p-4 mb-4 mt-4 flex justify-between items-center"
          key={index}
        >
          <div className="flex items-center">
            <div className="flex justify-between items-center">
              <button className="bg-{task.complete ? 'green' : 'white'}-500 text-white px-4 py-2 rounded" onClick={() => completeTask(task.id)}>
              </button>
            </div>
            <div>
              <h3 className="text-xl font-bold">{task.title}</h3>
              <p>{task.description}</p>

              <div className="flex items-center">
                <MdPriorityHigh className="text-yellow-500" />
                <p className="text-gray-400 text-sm mr-2">{task.priority}</p>
                <BiTimeFive className="text-yellow-500" />
                <p className="text-gray-400 ml-2">{task.time}</p>
              </div>
 
            </div>
          </div>
          <div>
            <button
              className="bg-red-500 text-white p-2 rounded-md mr-2"
              onClick={() => deleteTask(task,index)}
            >
              <FaTrashAlt />
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded-md"
              onClick={() => editTask(task, index)}
            >
              <FaEdit />
            </button>
         </div>
        </div>
  );
};
