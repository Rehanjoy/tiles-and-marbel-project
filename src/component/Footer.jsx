import { ChevronRight } from "lucide-react";
import React from "react";

export function Footer() {
  return (
    <footer class=" bg-slate-900">
      <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
          <img
            class="w-auto h-20"
            src="https://res.cloudinary.com/dcxnmagjx/image/upload/v1685334844/letter-o-logo-isometric-3d-lines-geometric-shape-paradox-icon-illustration-vector-removebg-preview_jo2ct2.png"
            alt=""
          />
        </a>

        <div class="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
          <a
            href="#"
            class="text-sm transition-colors duration-300 text-gray-500  hover:text-blue-200"
          >
            Overview
          </a>

          <a
            href="#"
            class="text-sm transition-colors duration-300 text-gray-500  hover:text-blue-200"
          >
            Features
          </a>

          <a
            href="#"
            class="text-sm transition-colors duration-300 text-gray-500  hover:text-blue-200"
          >
            Pricing
          </a>
          <a
            href="#"
            class="text-sm transition-colors duration-300 text-gray-500  hover:text-blue-200"
          >
            Careers
          </a>

          <a
            href="#"
            class="text-sm transition-colors duration-300 text-gray-500  hover:text-blue-200"
          >
            Help
          </a>

          <a
            href="#"
            class="text-sm transition-colors duration-300 text-gray-500  hover:text-blue-200"
          >
            Privacy
          </a>
        </div>

        <p class="mt-6 text-sm lg:mt-0 text-gray-400">
          © Copyright 2023 8bytes.{" "}
        </p>
      </div>
    </footer>
  );
}
