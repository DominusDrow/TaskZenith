import { useContext } from "react";
import { TaskContext } from "./contex/TaskContex";
import { Navigation } from "./components/pricipalScreen/navbar";
import { DocTask } from "./components/pricipalScreen/DocTask";
import { WelcomeScreen } from "./components/pricipalScreen/WelcomeScreen";

function App() {
  
  const { user } = useContext(TaskContext);

  return (
  <div className="bg-gray-900">
    <Navigation />
    { user && <DocTask /> }
    { !user && <WelcomeScreen /> }
  </div>
  );
}

export default App


