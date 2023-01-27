import { useState, useContext } from 'react';
import { TaskContext } from '../contex/TaskContex';

export const Navigation = () => {
  const { user, loginGoogle, logoutGoogle } = useContext(TaskContext);

  return (
    <nav className="bg-gray-800 p-3">
      <ul className="flex justify-between items-center">
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <img src="{user.photoURL}" className="avatar" alt="Avatar" onError={(e)=>{e.target.style.display='none'}} />
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


