import { useEffect, useState, useContext } from 'react';
import { TaskContext } from '../contex/TaskContex';
import userImg from '../assets/userUnknow.png';

export const Navigation = () => {
  const { user, loginGoogle, logoutGoogle } = useContext(TaskContext);
  const [userPhoto, setUserPhoto] = useState(userImg);

  useEffect(() => {
    if (user) 
      setUserPhoto(user.photoURL);

    console.log(userPhoto);
  }, [user]);

  return (
    <nav className="bg-gray-800 p-3">
      <ul className="flex justify-between items-center">
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <img src={userPhoto} className="w-10 h-10 rounded-full" alt="user photo"/>
        </li>
        { !user && 
            <li>
              <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => loginGoogle()}>
                Login
              </button>
            </li>
        }
        { user && 
            <li>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => logoutGoogle()}>
                Logout
              </button>
            </li>
        }
      </ul>
    </nav>
  );
};


