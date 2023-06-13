import React from "react";
import Layout from "../component/Layout";

const Error404 = () => {
  return (
    <Layout>
      <section class=" bg-gray-900 ">
        <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div class="wf-ull lg:w-1/2">
            <p class="text-sm font-medium text-blue-400">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold  text-white md:text-3xl">
              Page not found
            </h1>
            <p class="mt-4 text-gray-400">
              Sorry, the page you are looking for doesn't exist.Here are some
              helpful links:
            </p>

            <div class="flex items-center mt-6 gap-x-3">
              <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm  transition-colors duration-200  border rounded-lg gap-x-2 sm:w-auto  bg-gray-900 hover:bg-gray-100 text-gray-200 border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </button>

              <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto hover:bg-blue-500 bg-blue-600">
                Take me home
              </button>
            </div>
          </div>

          <div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
              src="https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Error404;