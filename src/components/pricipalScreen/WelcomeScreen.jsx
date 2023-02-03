import { useSpring, animated } from '@react-spring/web';
import { useContext } from 'react';
import { TaskContext } from '../../contex/TaskContex';

export const WelcomeScreen = () => {

  const { loginGoogle } = useContext(TaskContext);

  const animation = useSpring({
    from: { transform: 'translate3d(0, 100%, 0)' },
    to: { transform: 'translate3d(0, 0%, 0)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={{
        ...animation,
      }} className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-5xl font-bold text-white mb-6">TaskZenith</h1>
      <h3 className="text-2xl font-bold text-white mb-6">The new ally of productivity</h3>
      <p className="text-white mb-6 w-2/3 text-center">Task Zenith is a web application that can help you organize your daily tasks by priority and by the time it takes you to do each one.</p>
      <div className="w-64 h-10 mb-6 rounded-md bg-gray-800">
        <div className="h-full bg-gray-600 rounded-md" style={{width: "70%"}}></div>
      </div>
      <p className="text-white text-sm">70% de tu tarea diaria completada</p>
      <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-md" onClick={() => loginGoogle()}>Start</button>
    </animated.div>
  );
};


