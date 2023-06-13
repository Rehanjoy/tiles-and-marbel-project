// eslint-disable-next-line no-unused-vars
import React from "react";


const Products = () => {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]"
          >
            <img 
              src="https://www.nitco.in/nitcoassets/colour/white-marble.jpg"
              alt="AirMax Pro"
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">
              BIANCO ALASKA Marble
              </h1>
              <p className="mt-2 text-sm text-gray-400">
              Starting at just INR 50/-* per running feet, these window sills and door frames are pre-polished to 100% accuracy and absolutely ready to use in widths of 2" to 5" inches.
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                Shop Now &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
