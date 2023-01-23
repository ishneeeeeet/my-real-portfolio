import React from "react";
import img1 from "../images/leetcode.jpg"

const About = () => {
  return (
    <>
      <div className="w-full md:h-screen p-2 flex items-center py-16 bg-gradient-to-r bg-white">
        <div className="max-w-[1240px] m-auto md:grid-cols-3 gap-8 ">
          <div className="col-span-2">
            <p className="uppercase text-xl tracking-widest ">
              About
            </p>
            <h2 className="py-4 text-white">I am not your normal developer</h2>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              tenetur totam corrupti, nulla similique, praesentium dolore minima
              aut rerum rem obcaecati nobis maxime. Iure, debitis accusamus
              eligendi quaerat iusto porro saepe ab quasi assumenda? Fugiat
              voluptatibus ab illum quas? At nulla autem nobis rerum iusto
              maiores quisquam maxime quidem rem? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Saepe velit minus quod, ipsa omnis
              quo recusandae eaque culpa nobis officia optio soluta, eveniet
              autem maiores quae ut minima vitae dolore enim animi! Voluptas
              amet nam culpa autem fugiat enim dolore provident aut,
              consequuntur est soluta, ex asperiores repudiandae doloribus
              praesentium!
            </p>
            <p>Check out some of my latest projects.</p>
          </div>
          
        </div>
        <div className="h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-stretch justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl " src={img1} alt="" height={10}/>
          </div>
      </div>
    </>
  );
};

export default About;
