import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";
import { CardTask } from "./CardTask";

export const Tasks = () => {
  const { tasks } = useContext(TaskContext);
  const { tasksDone } = useContext(TaskContext);

  const taskDoneArray = tasks.filter((task) => task.complete);

  return (
    <div >
      {tasksDone == "true" ? (
        taskDoneArray.map((task, index) => (
          <CardTask key={index} task={task} index={index} />
        ))
      ) : (
        tasks.map((task, index) => (
          <CardTask key={index} task={task} index={index} />
        ))
      )}
    </div>
  );
}
