import React, { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";

function HeaderLayout({ children }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const { toggleTheme } = useContext(ThemeContext);

  function handleChange(e) {
    setLang(e.target.value);
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <div className="w-full">
      {/* Header */}
      <header className="w-full shadow-md">
        <div className="container mx-auto flex justify-between items-center py-6 px-8 max-w-7xl">
          <h1 className="font-semibold text-2xl text-blue-600">YOUR LOGO</h1>

          {/* Only Home header */}
          <div className="flex gap-6 items-center">
            <select
              onChange={handleChange}
              value={lang}
              className="rounded-md p-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            >
              <option value="uz">UZ</option>
              <option value="rus">RUS</option>
              <option value="en">EN</option>
            </select>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              <span>🌙</span> Dark Mode
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-10 bg-sky-50 rounded-lg mt-6">
        {children}
      </main>
    </div>
  );
}

export default HeaderLayout;
