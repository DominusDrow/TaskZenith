
export const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-3">
      <ul className="flex justify-between items-center">
        <li>
          <a href="#" className="text-white">Home</a>
        </li>
        <li>
          <img src="avatar.jpg" className="avatar" alt="Avatar" onError={(e)=>{e.target.style.display='none'}} />
        </li>
      </ul>
    </nav>
  );
};
