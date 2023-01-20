import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-gray-300">
      <h1 className="text-4xl text-blue-400 mx-10">Ishneeeeeet</h1>
      <ul className="hidden md:flex mx-20 space-x-5 text-white">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
