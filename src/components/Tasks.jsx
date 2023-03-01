import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";
import { CardTask } from "./CardTask";

export const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  const { taskDone } = useContext(TaskContext);

  const tasksDone = tasks.filter((task) => task.complete);
  const tasksNotDone = tasks.filter((task) => !task.complete);

  return (
    <div >
      {taskDone == "true" ? (
        tasksDone.map((task, index) => (
          <CardTask key={index} task={task} index={index} />
        ))
      ) : (
        tasksNotDone.map((task, index) => (
          <CardTask key={index} task={task} index={index} />
        ))
      )}
    </div>
  );
}
