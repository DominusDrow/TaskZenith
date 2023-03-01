import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";

const Donebutton = ["false", "true"];
const TextDone = ["Not Done", "Done"];

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
            <span className={`cursor-pointer 
              ${(taskDone == done && "bg-blue-700") || "bg-gray-700"}
              ${(done == "true" && "rounded-r-xl") || "rounded-l-xl"}
              block w-20 h-10 text-white text-center text-sm font-bold`}>

              <div className="flex justify-center items-center h-full">
                {TextDone[index]}
              </div>
            </span>
        </div>
        </label>
      ))}
    </div>
  );
}

