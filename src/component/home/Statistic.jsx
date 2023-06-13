import React from "react";
import {motion} from 'framer-motion'

const Statistic = () => {
  return (
    <div>
      <section className="bg-slate-800 text-blue-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <motion.h2 whileHover={{scale:1.3}} className="title-font font-medium sm:text-4xl text-3xl text-white">
                2.7K
              </motion.h2>
              <p className="leading-relaxed text-slate-100">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <motion.h2 whileHover={{scale:1.3}} className="title-font font-medium sm:text-4xl text-3xl text-white">
                1.8K
              </motion.h2>
              <p className="leading-relaxed text-slate-100">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <motion.h2 whileHover={{scale:1.3}} className="title-font font-medium sm:text-4xl text-3xl text-white">
                35
              </motion.h2>
              <p className="leading-relaxed text-slate-100">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <motion.h2 whileHover={{scale:1.3}} className="title-font font-medium sm:text-4xl text-3xl text-white">
                4
              </motion.h2>
              <p className="leading-relaxed text-slate-100">Products</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistic;
