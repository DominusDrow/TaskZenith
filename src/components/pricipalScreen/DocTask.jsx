import { TaskForm } from "../TaskForm";
import { Tasks } from "../Tasks";
import { ProgressBar } from "../Progresbar";
import SortTasks from "../SortButtom";
import { ToggleDone } from "../ToggleDone";

export const DocTask = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-11/12 sm:w-10/12 md:w-7/12 lg:w-6/12 xl:w-6/12">
          <ProgressBar />
        <div className="flex justify-between">
          <TaskForm />
          <ToggleDone />
          <SortTasks />
        </div>
        <Tasks />
      </div>
    </div>
  );
};

 
