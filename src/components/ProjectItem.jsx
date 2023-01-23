import React from 'react'
import img1 from "../images/leetcode.jpg"

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <>
    <div className="relative flex items-center h-auto w-full shadow-xl">
          <img className="object-scale-down" src={backgroundImg} alt="/" />
          <div className=" group-hover: black absolute top-[50%] left-[50%]">
            <h3>{}</h3>
            <p>ReactJS</p>
            <link rel="stylesheet" href={projectUrl} />
            <p>More Info</p>
          </div>
        </div></>
  )
}

export default ProjectItem