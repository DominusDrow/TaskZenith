import React, { useState } from 'react';
import { useContext, useEffect } from 'react';
import { TaskContext } from '../contex/TaskContex';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const { tasks } = useContext(TaskContext);

  useEffect(() => {
    let completedTasks = tasks.filter((task) => task.complete).length;
    let progress = (completedTasks / tasks.length) * 100;
    setProgress(Math.round(progress));
  }, [tasks]);

  return (
    <div className="w-full mx-auto mt-5">
      <div className="text-center text-lg font-medium">
        <span className="text-green-500">{progress}%</span> Completed
      </div>
      <div className="relative h-10 my-5 rounded-full bg-gray-300">
        <div
          className="absolute inset-0 bg-green-500 h-full rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};


