import React from "react";

const Header = () => {
  return (
    <header className=" text-white  bg-green-400">
      <div className="container flex mx-auto p-5 flex-col items-center md:flex-row">
        <a href="#" className="font-medium">
          <span className="text-xl">掲示板</span>
        </a>
        <a href="#" className=" md:ml-auto text-base ">
          <span className="border-b-2 border-gray-300">スレッドをたてる</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
