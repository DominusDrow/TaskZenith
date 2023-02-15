import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";

const Donebutton = ["true", "false"];
const TextDone = ["Done", "Not Done"];

export const ToggleDone = () => {
  const { taskDone } = useContext(TaskContext);
  const { setTaskDone } = useContext(TaskContext);

  return (
    <div className="flex justify-center">
      {Donebutton.map((done, index) => (
        <label key={index} className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="radio"
              className="hidden"
              name="done"
              value={done}
              checked={taskDone == done}
              onChange={(e) => setTaskDone(e.target.value)}
            />
            <span className={`cursor-pointer ${(taskDone == done && "bg-blue-700") || "bg-gray-700"} block w-24 h-12 text-white text-center text-sm font-bold`}>
              {TextDone[index]}
            </span>
        </div>
        </label>
      ))}
    </div>
  );
}

