import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { languages } from '../../static';
import ru from "../../assets/RU.png";
import uz from "../../assets/uzbek.webp";
import { useSelector } from 'react-redux';
import Mode from '../Mode/Mode';
import { LuMenu } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const Language = ({ func, bool }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dark = useSelector((state) => state.isDarkMode.isDarkMode);

  // Default language logic
  const [selectedLanguage, setSelectedLanguage] = useState("Uz");

  useEffect(() => {
    // Initialize language from localStorage or set default
    const storedLang = localStorage.getItem("i18nextLng") || "uz";
    if (storedLang.startsWith("ru")) {
      setSelectedLanguage("Ру");
    } else {
      setSelectedLanguage("Uz");
    }
    i18n.changeLanguage(storedLang);
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang.label);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("i18nextLng", lang.code); // Save to localStorage
    setIsOpen(false);
  };

  const flags = {
    uz: uz,
    ru: ru,
  };

  return (
    <div className="relative flex items-center gap-5 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors max-[990px]:hidden"
      >
        <img
          src={flags[i18n.language.split('-')[0]]}
          alt="Language Flag"
          className="w-5 h-5 rounded-full object-contain"
        />
        <span className={`${dark ? "text-black" : "text-white-person"} font-aeonik`}>
          {selectedLanguage}
        </span>
        <MdKeyboardArrowDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'rotate-180' : ''
          } ${dark ? "text-black" : "text-white-person"}`}
        />
      </button>
      <Mode />
      <button className="px-[50px] py-[18px] max-[800px]:px-5 max-[800px]:py-3 rounded-lg bg-red-person text-white-person max-[990px]:hidden max-[1310px]:px-4 max-[1310px]:py-3">
        {t("header.button")}
      </button>
      <div className="hidden max-[990px]:block">
        <button className="border p-1 rounded-lg" onClick={() => func(!bool)}>
          {bool ? (
            <IoIosClose
              className={`${
                dark ? "text-black" : "text-white-person"
              } text-4xl`}
            />
          ) : (
            <LuMenu
              className={`${
                dark ? "text-black" : "text-white-person"
              } text-4xl`}
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute top-full ${
            dark ? "bg-black text-white" : "bg-white text-black"
          } mt-2 border border-gray-700 rounded-md py-1 min-w-[100px]`}
        >
          {languages.map((lang, inx) => (
            <button
              key={inx}
              className="w-full px-4 py-2 text-left"
              onClick={() => handleLanguageChange(lang)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Language);
