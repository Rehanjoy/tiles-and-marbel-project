import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "./slider.json";

const Testimonial = () => {
  const SliderButtons = () => {
    const swiper = useSwiper();

    const handlePrev = () => {
      swiper.slidePrev();
    };

    const handleNext = () => {
      swiper.slideNext();
    };

    return (
      <div className="flex items-center justify-between mt-6 md:justify-start">
        <button
          onClick={handlePrev}
          title="left arrow"
          className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          title="right arrow"
          className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div>
      <section className="bg-slate-900">
        <div className="max-w-6xl px-6 py-20 mx-auto container px-6 py-12 mx-auto text-center">
          <p className="text-xl text-white font-medium">Testimonials</p>

          <h1 className="mt-2 text-2xl font-semibold capitalize lg:text-3xl text-white">
            What clients saying
          </h1>

          <Swiper>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                  <div className="absolute w-full bg-slate-600 -z-10 md:h-96 rounded-2xl"></div>

                  <div className="w-full p-6 bg-slate-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                    <img
                      className="h-24 w-24 md:mx-6 mx-auto rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                      src={card.image}
                      alt="client photo"
                    />

                    <div className="mt-2 md:mx-6">
                      <div>
                        <p className="text-xl font-medium tracking-tight text-white">
                          {card.name}
                        </p>
                        <p className="text-blue-200 ">{card.sub}</p>
                      </div>

                      <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                        {card.detail}
                      </p>

                      <SliderButtons />
                    </div>
                  </div>
                </main>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
