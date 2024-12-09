import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import logo from "../../assets/LOGO.png";
import Navlinks from "./Navlinks";
import { IoArrowUpCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown, MdOutlineTheaterComedy } from "react-icons/md";
import { BiMovie } from "react-icons/bi";
import { TbTicket } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import ru from "../../assets/RU.png";
import uz from "../../assets/uzbek.webp"
import { languages } from "../../static";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  console.log(Mode);
  const [header, setHeader] = useState(false);
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("Uz");

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "uz";
    if (storedLang.startsWith("ru")) {
      setSelectedLanguage("Ру");
    } else {
      setSelectedLanguage("Uz");
    }
    i18n.changeLanguage(storedLang);
  }, [i18n]);

  const flags = {
    uz: uz,
    ru: ru,
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang.label);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("i18nextLng", lang.code);
    setIsOpen(false);
  };

  const handleCloseModals = () => {
    setIsOpen(false);
    setMenu(false);
  };

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenu(!menu);
  };

  const handleLanguageToggle = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  })
  return (
    <>
      <header
        className={`${Mode ? "bg-[#fff]" : "bg-[#000]"} duration-300 sticky top-0 z-40 ${
          header
            ? Mode
              ? "shadow-lg shadow-[#0000001a]"
              : "shadow-lg shadow-[#ffffff33]"
            : ""
        }`}
      >
        <div className="container">
          <nav className="flex justify-between items-center h-[90px] relative">
            <div className="flex items-center">
              <NavLink to={"/"}>
                <img src={logo} alt="" className="max-w-[112px]" />
              </NavLink>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Navlinks />
            </div>
            <Language func={setMenu} bool={menu} />
          </nav>
        </div>
      </header>
      <div
        onClick={handleCloseModals}
        className={`w-screen h-screen fixed text-center top-[89px] z-[90] ${
          Mode ? "bg-[#2c2c2c6e]" : "bg-[#ffffff33]"
        }  duration-700  border-t border-t-[#00000017]
            ${
              menu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            }`}
      >
        <div className={`${Mode ? "bg-white" : " bg-black"} pt-5`}>
          <ul className="flex flex-col mb-7">
            <li
              className={`py-[15px] ${
                Mode ? "text-black" : "text-white-person"
              }`}
            >
              <NavLink
                onClick={handleMenuToggle}
                to={"/"}
                className="flex justify-center"
              >
                <p className="flex gap-1 items-center">
                  <BiMovie className="w-6 h-6 " /> <span>Афиша</span>
                </p>
              </NavLink>
            </li>
            <li
              className={`py-[15px] ${
                Mode ? "text-black" : "text-white-person"
              }`}
            >
              <NavLink
                onClick={handleMenuToggle}
                to={"/sessions"}
                className="flex justify-center"
              >
                <p className="flex gap-1 items-center">
                  <MdOutlineTheaterComedy className="w-6 h-6 " />{" "}
                  <span>Сеансы</span>
                </p>
              </NavLink>
            </li>
            <li
              className={`py-[15px] ${
                Mode ? "text-black" : "text-white-person"
              }`}
            >
              <NavLink
                onClick={handleMenuToggle}
                to={"/search"}
                className="flex justify-center"
              >
                <p className="flex gap-1 items-center">
                  <TbTicket className="w-6 h-6 " /> <span>Билеты</span>
                </p>
              </NavLink>
            </li>
            <li
              className={`py-[15px] ${
                Mode ? "text-black" : "text-white-person"
              }`}
            >
              <NavLink
                onClick={handleMenuToggle}
                to={"/search"}
                className="flex justify-center"
              >
                <p className="flex gap-1 items-center">
                  <FiSearch className="w-6 h-6 " /> <span>Поиск</span>
                </p>
              </NavLink>
            </li>
          </ul>
          <div className="pb-8 mt-8">
            <button className="bg-red-person text-white-person px-7 py-2 rounded-lg ">
              Войти
            </button>
          </div>
          <div className="flex justify-center pb-10 h-14 z-50 mx-auto relative">
          <button
                onClick={handleLanguageToggle}
                className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
              >
                <img src={flags[i18n.language.split('-')[0]]} alt="Language Flag" className="w-5 h-5 rounded-full" />
                <span
                  className={`${
                    Mode ? "text-black" : "text-white-person"
                  } font-aeonik`}
                >
                  {selectedLanguage}
                </span>
                <MdKeyboardArrowDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  } ${Mode ? "text-black" : "text-white-person"}`}
                />
              </button>
              {isOpen && (
                <div
                  className={`absolute top-full ${
                    Mode ? "bg-black text-white" : "bg-white text-black"
                  } mt-2 border border-gray-700 rounded-md py-1 min-w-[100px]`}
                >
                  {languages.map((lang, inx) => (
                    <button
                      key={inx}
                      className="w-full px-4 py-2 text-left hover:bg-gray-200"
                      onClick={() => handleLanguageChange(lang)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
      {header ? (
        <div className="fixed bottom-16 right-[11%] z-[101] duration-300 max-[990px]:right-[5%] max-[990px]:bottom-9 max-[550px]:bottom-6">
          <a href="#">
            <IoArrowUpCircle className="text-[50px] text-red-person" />
          </a>
        </div>
      ) : null}
    </>
  );
};

export default React.memo(Header);
