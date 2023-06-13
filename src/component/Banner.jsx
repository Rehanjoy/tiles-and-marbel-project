import React from "react";

const Banner = () => {
  return (
    <div>
      <a
        class="group block  p-4  text-center transition-all duration-300 bg-gray-900 "
        href="#"
      >
        <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <p class="mr-2 inline-block text-sm text-white">
            Shop for everyone on your list with the Preline Guide.
          </p>
          <span class="group-hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold  text-sm text-blue-500">
            Shop now
            <svg
              class="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
      </a>
    </div>
  );
};

export default Banner;
