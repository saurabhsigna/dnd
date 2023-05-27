"use client";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import AvatarSelectComponent from "../avatarSelector/AvatarSelectComponent";
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [fullName, setFullName] = useState("");
  const [imgAvatar, setImgAvatar] = useState("01.png");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["access_token", "refresh_token"]);

  const submitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_URI + "/register",
        { email, password, imgUri: imgAvatar, fullName }
      );
      const { access_token, refresh_token } = response.data;

      if (access_token && refresh_token) {
        // Store tokens in cookies
        setCookies("access_token", access_token);
        setCookies("refresh_token", refresh_token);
      }
      // Redirect to home page
      window.location.href = "/";
    } catch (error) {
      console.log("Hi, something error happened");
    }
  };
  return (
    <section className=" bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-wrap">
        <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
          <div className="max-w-md mx-auto">
            <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
              <a
                className="text-white text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  className="h-12"
                  src="/atis-assets/logo/atis/atis-color-white.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <a
                className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition duration-200"
                href="#"
              >
                Sign In
              </a>
            </div>
            <div>
              <div className="mb-6 px-3">
                <span className="text-gray-600 ">Sign Up</span>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  Create an account
                </h3>
              </div>
              <form action="" onSubmit={submitRegister}>
                <AvatarSelectComponent
                  imgAvatar={imgAvatar}
                  setImgAvatar={setImgAvatar}
                />
                <div className="flex flex-wrap">
                  <div className="mb-3 w-full lg:w-full px-2">
                    <input
                      className="w-full  p-4  text-black dark:text-gray-50 dark:bg-gray-800 bg-gray-200 outline-none rounded"
                      type="text"
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div className="mb-3 flex p-4 mx-2 dark:bg-gray-800 bg-gray-200  rounded">
                  <input
                    className="w-full text-black dark:text-gray-50 dark:bg-gray-800 bg-gray-200 outline-none"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                  />
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    ></path>
                  </svg>
                </div>
                <div className="mb-6 flex p-4 mx-2 dark:bg-gray-800 bg-gray-200 rounded">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full  text-black dark:text-gray-50 dark:bg-gray-800 bg-gray-200 outline-none"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" onClick={togglePasswordVisibility}>
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="px-3 text-center">
                  <button
                    type="submit"
                    className="mb-2 w-full py-4 bg-pink-600 hover:bg-pink-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                  >
                    Sign Up
                  </button>
                  <span className="text-gray-700 dark:text-gray-400 text-xs">
                    <span>Already have an account?</span>
                    <a className="text-pink-600 hover:underline" href="#">
                      Sign In
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-full lg:w-1/2">
          <div className="absolute inset-0 bg-purple-800 opacity-50"></div>
          <img
            className="absolute inset-0 h-full ml-auto object-cover z-0"
            src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
            alt=""
          />
          <div
            className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
            style={{ zIndex: 10 }}
          >
            <h2 className="mb-2 text-2xl text-white font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <div className="max-w-lg mx-auto mb-6">
              <p className="text-gray-300 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
            </div>
            <a
              className="inline-block py-2 px-6 rounded-t-xl leading-loose rounded-l-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold transition duration-200"
              href="#"
            >
              Get Started
            </a>
            <div className="mt-12 flex justify-center space-x-3">
              <button className="p-1 bg-gray-500 rounded-full"></button>
              <button className="p-1 bg-gray-500 rounded-full"></button>
              <button className="p-1 bg-purple-600 rounded-full"></button>
              <button className="p-1 bg-gray-500 rounded-full"></button>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="relative w-full">
            <img
              className=" relative mb-4 object-cover"
              src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0 mb-10 flex justify-center space-x-3">
              <button className="p-1 bg-gray-500 rounded-full"></button>
              <button className="p-1 bg-gray-500 rounded-full"></button>
              <button className="p-1 bg-green-600 rounded-full"></button>
              <button className="p-1 bg-gray-500 rounded-full"></button>
            </div>
          </div>
          <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
            <h2 className="mb-2 text-2xl font-bold">
              So much more than a business analytics tool
            </h2>
            <p className="mb-6 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a
              className="inline-block py-2 px-6 rounded-t-xl rounded-l-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold transition duration-200"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
