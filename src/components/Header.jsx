import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="text-white  bg-green-400">
      <div className="flex mx-auto p-5 flex-col items-center md:flex-row">
        <Link to="/">
          <span className="text-xl font-medium">掲示板</span>
        </Link>
        <Link to='/CreateThreadsPage' className='md:ml-auto'>
          <span className="text-base border-b-2 border-gray-300">スレッドをたてる</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
