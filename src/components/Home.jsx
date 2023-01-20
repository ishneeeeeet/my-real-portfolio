import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import img1 from "../images/leetcode.jpg";
import img2 from "../images/linkedin.png";

const Home = () => {
  
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-[1000px] mx-auto py-2 flex flex-col justify-center items-center h-full">
        <p className="uppercase tracking-widest">
          Lets build something together
        </p>
        <h2 className="text-5xl  flex font-bold py-2">
          Hi, I'm&nbsp; <span className="text-[#FF9F9F]"> Ishneet Singh</span>
        </h2>
        <img src="src\assets\leetcode.png" alt="" />
        <h1 className=" text-[#B8E8FC] font-bold text-6xl">
          A full Stack Developer
        </h1>
        <p className="py-2 text-center m-w-[70%] mx-auto">
          I am an engineer specialized in building(and occassionally designing)
          exceptional digital experiences. Currently I am focusing on building
          responsive front-end websites while learning backend technologies.
        </p>
        <div className="flex justify-between space-x-20 m-w-[330px] mx-auto py-4 text-4xl">
          <div className="w-10">
            <img src={img2} alt="" />
          </div>
          <div>
            <FaGithub />
          </div>
          <div>
            <BsFillPersonLinesFill />
          </div>
          <div className="w-9">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
