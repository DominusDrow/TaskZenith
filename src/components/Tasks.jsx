import { useContext } from "react";
import { TaskContext } from "../contex/TaskContex";
import { CardTask } from "./CardTask";

export const Tasks = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div >
      {tasks.map((task, index) => (
        <CardTask task={task} index={index} key={index} />
      ))}
    </div>
  );
}
