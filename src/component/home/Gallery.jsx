// eslint-disable-next-line no-unused-vars
import React from "react";
import {motion} from 'framer-motion'

const Gallery = () => {
  return (
    <div>
      <section className=" bg-slate-900 text-blue-400 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap  justify-center">
        <div className="flex flex-col items-center w-full mb-20 text-center">
  <h1 className="sm:text-3xl text-2xl font-medium title-font text-blue-200">
    Beauty reinforced charisma reinvented
  </h1>
  <div className="flex justify-center">
    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-white">
      A unique Triple Reinforced gives the marble a charmed makeover, shaping it into an exquisite piece of splendor. Marble blocks are strengthened by Fiber and Imported Rock Resin. The surface is prepared by drying in an oven before applying Fiber, while the bottom and top surfaces are filled with Epoxy, Vacuum process and curing in oven ensures filling of Epoxy in the smallest of pores. Extra strengthening is achieved by pre-grinding and UV resin application.
    </p>
  </div>
</div>

          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <motion.img whileHover={{scale:0.9}}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://www.nitco.in/nitcomedia/marble/masters/ONYX-(-TIGER-BLUE-).jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <motion.img whileHover={{scale:0.9}}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://www.nitco.in/nitcomedia/marble/masters/ILLUSION-BLUE.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <motion.img whileHover={{scale:0.9}}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.nitco.in/nitcomedia/marble/masters/PALISSANDRO-BLUETTE.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <motion.img whileHover={{scale:0.9}}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://www.nitco.in/nitcomedia/marble/masters/ONYX-(-CLOUDY-PINK-).jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <motion.img whileHover={{scale:0.9}}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://www.nitco.in/nitcomedia/marble/masters/CHIANTI-BLUE.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <motion.img whileHover={{scale:0.9}}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://www.nitco.in/nitcomedia/marble/masters/BLUE-BRESCIA.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
