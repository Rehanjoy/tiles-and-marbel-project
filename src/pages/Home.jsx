"use client";

import React from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  X,
} from "lucide-react";
import Lottie from "lottie-react";
import Layout from "../component/Layout";
import IMAGE from "../assets/house.json";
import Testimonial from "../component/home/Testimonial";
import Statistic from "../component/home/Statistic";
import Hero from "../component/home/Hero";
import Gallery from "../component/home/Gallery";
import Contact from "../component/home/Contact";
import Products from "../component/home/Products";
import Promo from "../component/home/Promo";
import {motion} from 'framer-motion'
export function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout>
      <div className="w-full">
        <section className=" bg-slate-900">
          <div className="container px-6 py-16 mx-auto text-center">
            <div className="max-w-lg mx-auto">
              <h1 className="text-3xl font-semibold  text-white lg:text-4xl">
              Discover Natural Stones
              </h1>
              <p className="mt-6 text-gray-100">
              The uniqueness of materials such as marble, granite, onyx, and semi-precious stones, is transformed by XYZ into livable surfaces.
              </p>
              <motion.button  whileTap={{scale:1.1}}  className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-indigo-500 rounded-lg hover:bg-indigo-400 lg:mx-0 lg:w-auto focus:outline-none">
                Start 14-Day free trial
              </motion.button>
              <p className="mt-3 text-sm text-gray-100 ">No credit card required</p>
            </div>

            <div className="flex justify-center mt-10">
              <img
                className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                src="https://www.nitco.in/nitcoassets/homebanners/marble-3.jpg?v=28042023"
              />
            </div>
          </div>
        </section>

        {/* Hero Section */}
        {/* <div className="relative w-full bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
             
              <h1 className="mt-8 text-3xl font-bold text-center tracking-tight text-black md:text-4xl lg:text-6xl">
                People who care about your growth
              </h1>
              <p className="mt-8 text-lg  text-center  text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur modi blanditiis dolores quasi eaque explicabo!
              </p>
          
              <div>
                <button
                  type="button"
                  className="mt-5 block w-full rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Browse Products
                </button>
              </div>
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            

              <Lottie
                animationData={IMAGE}
                loop={true}
                className=" h-full object-cover"
              />
            </div>
          </div>
        </div> */}
        {/* Features Section */}
        {/* <div className="mx-auto mb-24 max-w-7xl px-2 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                <svg
                  className="h-9 w-9 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Secured Payments
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                <svg
                  className="h-9 w-9 text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Fast & Easy to Load
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-9 w-9 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Light & Dark Version
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
                <svg
                  className="h-9 w-9 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                Filter Blocks
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div> */}

        {/* Pricing Section */}
        {/* <div className="mx-auto my-12 max-w-7xl md:my-24 lg:my-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-6">
            <div className="px-4 py-10 lg:col-span-5 lg:px-0">
              <span className="mb-8 inline-block rounded-full border p-1 px-3 text-xs font-semibold">
                Pricing that fits your budget
              </span>
              <h1 className="text-3xl font-bold md:text-5xl">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="mt-8 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam magni, rem sed sint neque doloribus saepe veniam
                minima quaerat minus.
              </p>
              <div className="mt-8 flex w-full max-w-sm items-center space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                ></input>
                <button
                  type="button"
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
              <div className="w-full p-5 md:w-1/2">
                <div className="rounded-md border bg-white bg-opacity-90">
                  <div className=" border-b">
                    <div className="px-9 py-7">
                      <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                        Standard
                      </h3>
                      <p className="font-medium leading-relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consect etur adipiscing
                        maror.
                      </p>
                    </div>
                  </div>
                  <div className="px-9 pb-9 pt-8">
                    <p className="mb-6 font-medium leading-relaxed text-gray-600">
                      Features included:
                    </p>
                    <ul className="mb-11">
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          3 Team Members
                        </p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          1200+ UI Blocks
                        </p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          10 GB Cloud Storage
                        </p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          Individual Email Account
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          Premium Support
                        </p>
                      </li>
                    </ul>
                    <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                      <span>Starting from</span>
                      <span className="ml-2 text-gray-900">$49/mo</span>
                    </p>
                    <div className="md:inline-block">
                      <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Start your free trial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 md:w-1/2">
                <div className="rounded-md border bg-white bg-opacity-90">
                  <div className=" border-b">
                    <div className="px-9 py-7">
                      <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                        Standard
                      </h3>
                      <p className="font-medium leading-relaxed text-gray-500">
                        Lorem ipsum dolor sit amet, consect etur adipiscing
                        maror.
                      </p>
                    </div>
                  </div>
                  <div className="px-9 pb-9 pt-8">
                    <p className="mb-6 font-medium leading-relaxed text-gray-600">
                      Features included:
                    </p>
                    <ul className="mb-11">
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          3 Team Members
                        </p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          1200+ UI Blocks
                        </p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          10 GB Cloud Storage
                        </p>
                      </li>
                      <li className="mb-4 flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          Individual Email Account
                        </p>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2" size={16} />
                        <p className="font-semibold leading-normal">
                          Premium Support
                        </p>
                      </li>
                    </ul>
                    <p className="mb-6 text-lg font-semibold leading-normal text-gray-600">
                      <span>Starting from</span>
                      <span className="ml-2 text-gray-900">$49/mo</span>
                    </p>
                    <div className="md:inline-block">
                      <button
                        type="button"
                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Start your free trial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* NewsLetter */}
        {/* <div className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 lg:px-2">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <h2 className="text-3xl font-bold text-black">
                Sign up for our weekly newsletter
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-800">
                  Trusted by over 100,000+ businesses and individuals
                </p>
                <div className="mt-2 flex items-center">
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 inline-block">
                    <span className="text-sm font-semibold text-gray-800">
                      4.8/5 . 3420 Reviews
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
              <form className="flex lg:justify-center">
                <div className="flex w-full max-w-md flex-col space-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                  ></input>
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-2 lg:text-center">
                <span className="text-sm text-gray-600">
                  By signing up, you agree to our terms of service and privacy
                  policy.
                </span>
              </p>
            </div>
          </div>
        </div> */}

        {/* FAQs */}
        {/* <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
          <div>
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facere, assumenda
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
              <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                >
                  <span className="flex text-lg font-semibold text-black">
                    How do I get started?
                  </span>

                  <ChevronUp className="h-5 w-5 text-gray-500" />
                </button>
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat aliquam adipisci iusto aperiam? Sint asperiores
                    sequi nobis inventore ratione deleniti?
                  </p>
                </div>
              </div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
                >
                  <button
                    type="button"
                    className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                  >
                    <span className="flex text-start text-lg font-semibold text-black">
                      What is the difference between a free and paid account?
                    </span>
                    <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                  </button>
                </div>
              ))}
            </div>
            <p className="textbase mt-6 text-center text-gray-600">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="#"
                title=""
                className="font-semibold text-black hover:underline"
              >
                Contact our support
              </a>
            </p>
          </div>
        </section> */}

        <Products />
        <Promo />
        <Gallery />
        <Statistic />
        <div className="bg-slate-900">
          <div className="mx-auto grid w-full max-w-6xl space-y-22   ">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                explore our <br /> awesome Components
              </h1>

              <div className="mt-2 ">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
        <Hero />
        <Testimonial />
        <Contact />
      </div>
    </Layout>
  );
}
