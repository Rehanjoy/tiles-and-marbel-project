// eslint-disable-next-line no-unused-vars
import React from "react";
import IconButton from "../Blocks/IconButton";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <section className=" bg-slate-900 text-blue-600 body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg text-start">
                <h1 className="text-4xl font-bold tracking-tight mb-12 text-white  sm:text-6xl">
                CARE & MAINTENANCE
                </h1>
                <p className="mt-4 text-xl text-blue-300">
                A comprehensive care and maintenance program is just as important as the initial material selection. If you’re a homeowner, you’ll want to be aware of the care and maintenance requirements before you select a material. If you are an architect or designer, you'll want to know this information prior to specifying a material.
                </p>
              </div>
            <motion.div WhileTap={{scale:1.2}} className="flex justify-start mt-12 max-w-7xl sm:px-6 lg:px-8">
  <a
    href="#"
    className="inline-block rounded-md  border border-transparent bg-indigo-400 px-8 py-3 text-center font-medium text-white hover:bg-indigo-500"
    >
    Shop Collection
  </a>
</motion.div>
      </div>
      </div>

          <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-5/6">
            <img
              className="object-cover object-center  rounded-md  rounded drop-shadow-lg shadow-slate-300"
              alt="hero"
              src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1685260571/100387703_marble-art-polished-wall-tile-bathroom-vanity_room_1_2_xckomh.jpg"
              />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
