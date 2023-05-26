import React from "react";

export default function App() {
  return (
    <section class="overflow-hidden">
      <div class="bg-black">
        <div class="container px-4 mx-auto">
          <div class="flex items-center justify-between py-5">
            <div class="w-auto">
              <div class="flex flex-wrap items-center">
                <div class="w-auto pr-2">
                  <a href="#">
                    <img src="basko-assets/logos/basko-logo-light.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="w-auto">
              <div class="flex flex-wrap items-center">
                <div class="w-auto hidden lg:block">
                  <ul class="flex items-center mr-8">
                    <li class="mr-14 font-medium text-white hover:text-gray-200 tracking-tight">
                      <a href="#">Features</a>
                    </li>
                    <li class="mr-14 font-medium text-white hover:text-gray-200 tracking-tight">
                      <a href="#">Pricing</a>
                    </li>
                    <li class="mr-8 font-medium text-white hover:text-gray-200 tracking-tight border-r border-gray-700 pr-8">
                      <a href="#">Automation</a>
                    </li>
                    <li class="font-medium text-white hover:text-gray-200 tracking-tight">
                      <a href="#">Customer Login</a>
                    </li>
                  </ul>
                </div>
                <div class="w-auto hidden lg:block">
                  <div class="inline-block">
                    <a
                      class="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                    >
                      Try 14 Days Free Trial
                    </a>
                  </div>
                </div>
                <div class="w-auto lg:hidden">
                  <a href="#">
                    <svg
                      class="navbar-burger text-indigo-600"
                      width="51"
                      height="51"
                      viewbox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="56"
                        height="56"
                        rx="28"
                        fill="currentColor"
                      ></rect>
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav class="relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto">
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <a class="inline-block" href="#">
                      <img
                        src="basko-assets/logos/basko-logo-light.png"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a class="navbar-burger text-white" href="#">
                      <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center py-16 w-full">
                <ul>
                  <li class="mb-12 font-medium text-white hover:text-gray-200 tracking-tight">
                    <a href="#">Features</a>
                  </li>
                  <li class="mb-12 font-medium text-white hover:text-gray-200 tracking-tight">
                    <a href="#">Pricing</a>
                  </li>
                  <li class="mb-12 font-medium text-white hover:text-gray-200 tracking-tight">
                    <a href="#">Automation</a>
                  </li>
                  <li class="font-medium text-white hover:text-gray-200 tracking-tight">
                    <a href="#">Customer Login</a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-end w-full pb-8">
                <a
                  class="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                  href="#"
                >
                  Try 14 Days Free Trial
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="pt-16 lg:pt-32 pb-24 lg:pb-52 bg-black overflow-hidden">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-8">
            <div class="w-full md:w-1/2 p-8">
              <div class="md:max-w-lg">
                <span class="inline-block mb-8 px-3 py-1 text-white font-semibold bg-gray-600 rounded-full">
                  #1 Brand Building Tool
                </span>
                <h1 class="font-heading mb-12 text-6xl md:text-7xl text-white tracking-tighter">
                  Boost brand&apos;s visibility and reach fast.
                </h1>
                <div class="flex flex-wrap -m-2 mb-14">
                  <div class="w-auto p-2">
                    <a
                      class="inline-block px-5 py-4 text-white font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-400 transition duration-200"
                      href="#"
                    >
                      Try 14 Days Free Trial
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a
                      class="inline-flex items-center px-5 py-4 bg-transparent hover:bg-indigo-600 border border-gray-600 hover:border-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                      href="#"
                    >
                      <div class="inline-block">
                        <svg
                          class="mr-2.5"
                          width="18"
                          height="19"
                          viewbox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <span class="text-white font-semibold tracking-tight">
                        Download IOS App
                      </span>
                    </a>
                  </div>
                </div>
                <div class="max-w-md">
                  <div class="flex flex-wrap -m-1.5">
                    <div class="w-auto p-1.5">
                      <div class="flex flex-wrap">
                        <div class="w-auto">
                          <img
                            src="basko-assets/images/headers/avatar.png"
                            alt=""
                          />
                        </div>
                        <div class="w-auto -ml-5">
                          <img
                            src="basko-assets/images/headers/avatar2.png"
                            alt=""
                          />
                        </div>
                        <div class="w-auto -ml-5">
                          <img
                            src="basko-assets/images/headers/avatar3.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 p-1.5">
                      <p class="text-white tracking-tight">
                        Join other 12k+ Marketers and start building brands
                        reputation now.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-8">
              <img
                class="transform hover:-translate-y-2 transition duration-500"
                src="basko-assets/images/headers/dashboard.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
