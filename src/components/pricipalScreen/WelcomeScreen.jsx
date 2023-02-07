import { useSpring, animated } from '@react-spring/web';
import { useContext } from 'react';
import { TaskContext } from '../../contex/TaskContex';
import googleCalendar from '../../assets/googleCalendar.png';
import notion from '../../assets/notion.png';

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

      <p className="text-white mt-6">You can also use TaskZenith with</p>
    <div className="flex flex-row items-center">
      <div className="flex flex-col items-center">
        <img
          src={googleCalendar}
          className="w-32 h-32 m-4"
          alt="Google Calendar"
        />
        <p className="text-lg text-white">Google Calendar</p>
      </div>
      <div className="flex flex-col items-center ml-6">
        <img
          src={notion}
          className="w-32 h-32 m-4"
          alt="Notion"
        />
        <p className="text-lg text-white">Notion</p>
      </div>
    </div>

      <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-md m-4" onClick={() => loginGoogle()}>Start</button>

    </animated.div>
  );
};


