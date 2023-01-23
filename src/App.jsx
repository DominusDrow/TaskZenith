import { TaskForm } from "./components/TaskForm";
import { Tasks } from "./components/Tasks";

function App() {

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold text-center mb-4">Hello World</h1>
        <p className="text-center mb-4">This is a sample React app built with </p>
        <TaskForm />
        <Tasks />
      </div>
    </div>
  
  )
}

export default App
