import React, { useState } from 'react';
import {BsSortDown} from 'react-icons/bs';

const SortTasks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="bg-gray-700 hover:bg-gray-600 font-medium py-2 px-4 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsSortDown />
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 py-2 bg-gray-700 rounded-lg shadow-xl">
          <li className="hover:bg-gray-500 py-2 px-4 text-white">
            <a className="block" href="#">
              Priority
            </a>
          </li>
          <li className="hover:bg-gray-500 py-2 px-4 text-white">
            <a className="block" href="#">
              Time
            </a>
          </li>
          <li className="hover:bg-gray-500 py-2 px-4 text-white">
            <a className="block" href="#">
              Date
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortTasks;

