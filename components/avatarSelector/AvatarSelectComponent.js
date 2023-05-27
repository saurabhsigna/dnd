import React, { useState } from "react";

export default function App({ imgAvatar, setImgAvatar }) {
  const [activeAvatar, setActiveAvatar] = useState(0);

  let avatarsUrl = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"];
  const changeImg = (uri, index) => {
    setImgAvatar(uri);
    setActiveAvatar(index);
  };
  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-200 dark:bg-gray-800 py-4 items-center justify-center mx-2 rounded mb-[25px]">
        <div className="font-semibold text-xl dark:text-white text-black">
          Select An Avatar
        </div>
        <img
          src={"/avatars/" + imgAvatar}
          className={`h-16  w-16 rounded-full`}
        />
        <div className="flex justify-center">
          <div className="grid gap-4 grid-cols-3 lg:grid-cols-6 md:grid-cols-6">
            {avatarsUrl.map((uri, index) => (
              <button
                type="button"
                className={`${
                  activeAvatar == index ? "dark:bg-gray-400 bg-gray-700" : ""
                } p-1 rounded-[0.2rem] transition duration-300 ease-in-out`}
                key={index}
                onClick={() => changeImg(uri, index)}
              >
                <img
                  src={"/avatars/" + uri}
                  className="h-[36px] w-[36px] rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
