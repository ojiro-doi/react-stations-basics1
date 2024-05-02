import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleCreateThreads = () => {
    navigate('/CreateThreadsPage');
  };

  return (
    <header className=" text-white  bg-green-400">
      <div className="container flex mx-auto p-5 flex-col items-center md:flex-row">
        <h1 className="font-medium">
          <span className="text-xl">掲示板</span>
        </h1>
        <button onClick={handleCreateThreads} className=" md:ml-auto text-base border-b-2 border-gray-300">
          スレッドをたてる
        </button>
      </div>
    </header>
  );
};

export default Header;
