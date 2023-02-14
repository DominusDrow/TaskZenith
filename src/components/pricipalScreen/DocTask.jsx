import { TaskForm } from "../TaskForm";
import { Tasks } from "../Tasks";
import { ProgressBar } from "../Progresbar";
import SortTasks from "../SortButtom";

export const DocTask = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-1/2">
          <ProgressBar />
        <div className="flex justify-between">
          <TaskForm />
          <SortTasks />
        </div>
        <Tasks />
      </div>
    </div>
  );
};

 
