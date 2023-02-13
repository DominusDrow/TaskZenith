import { TaskForm } from "../TaskForm";
import { Tasks } from "../Tasks";

export const DocTask = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-1/2">
        <TaskForm />
        <Tasks />
      </div>
    </div>
  );
};

 
