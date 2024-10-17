import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from './ThemeContext';
import HeaderLayout from './Layout/HeaderLayout';

function Home() {
  const { darkMode } = useContext(ThemeContext);
  const [t, i18n] = useTranslation();

  return (
    <HeaderLayout>
      <div
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        } w-full min-h-screen m-0 p-0`} 
      >
        <div
          className={`w-full mx-auto py-12 px-10 ${
            darkMode
              ? "bg-gradient-to-r from-gray-800 to-black"
              : "bg-gradient-to-r from-blue-500 to-indigo-500"
          } shadow-lg flex flex-col lg:flex-row items-center gap-10`}
        >
          <div className="text-center lg:text-left">
            <p className="text-white text-lg mb-6">{t("security")}</p>
            <h1 className="text-5xl font-extrabold text-white mb-8">{t("keep")}</h1>

            <div className="flex items-center justify-center lg:justify-start gap-6 mb-8">
              <img
                src="src/assets/locationimg.jpeg"
                className="w-16 h-16 bg-blue-400 rounded-full shadow-md"
                alt="Location"
              />
              <h3 className="text-white font-semibold text-xl">{t("we")}</h3>
            </div>

            <h2 className="text-white font-semibold text-4xl mb-4">{t("join")}</h2>
            <p className="font-medium text-white text-lg mb-8">{t("first")}</p>

            <div className="flex justify-center lg:justify-start gap-4 bg-white p-4 rounded-full shadow-md max-w-xs mx-auto lg:mx-0">
              <input
                className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Enter email"
              />
              <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300">
                {t("joinList")}
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="src/assets/iPhone 13 Pro.svg"
              alt="iPhone"
              className="w-96 h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </HeaderLayout>
  );
}

export default Home;
