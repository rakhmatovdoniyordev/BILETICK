import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGooglePlay,
  FaApple,
  FaRegQuestionCircle
} from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { MdTheaterComedy, MdOutlineSportsBasketball  } from "react-icons/md";
import { GiMicrophone } from "react-icons/gi";
import { useSelector } from "react-redux";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import logo from "../../assets/LOGOTYPE.png"
import google from "../../assets/google-play.png"
import app from "../../assets/app-store.png"

const Footer = () => {
  const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
  return (
    <div className="container">
      <footer className={`${Mode ? "bg-[#cfcfcf]" : "bg-[#111111]" } text-white p-8 rounded-lg mb-10 mt-[120px] font-aeonik`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Download Section */}
            <div className="flex flex-col justify-between">
              <div className="">
                <img src={logo} alt="" />
              </div>
              <div className="space-y-2 flex flex-col">
                <a href="#">
                  <img src={google} alt="" />
                </a>
                <a href="#">
                  <img src={app} alt="" />
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div className={`${Mode ? "text-black" : "text-white-person"}`}>
              <h3 className="text-lg font-semibold mb-4">О нас</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-red-600 transition flex items-center gap-1">
                    <IoNewspaperOutline className="text-[24px] text-red-person"/>
                    Публичная оферта
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-red-500 transition flex items-center gap-1"
                  >
                    <BsStars className="text-[24px] text-red-person"/>
                    Реклама
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition flex items-center gap-1">
                    <FaRegQuestionCircle className="text-[24px] text-red-person"/>
                    F.A.Q
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition flex items-center gap-1">
                    <BsTelephone className="text-[24px] text-red-person"/>
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className={`${Mode ? "text-black" : "text-white-person"}`}>
              <h3 className="text-lg font-semibold mb-4">Категории</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <BiCameraMovie className="text-[24px] text-red-person"/>
                    <span>Кино</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <MdTheaterComedy className="text-[24px] text-red-person"/>
                    <span>Театр</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <GiMicrophone className="text-[24px] text-red-person"/>
                    <span>Концерты</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <MdOutlineSportsBasketball  className="text-[24px] text-red-person"/>
                    <span>Спорт</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className={`${Mode ? "text-black" : "text-white-person"}`}>
              <h3 className="text-lg font-semibold mb-4">Связаться с нами</h3>
              <a
                href="tel:+998958973338"
                className="text-red-600 text-xl font-semibold hover:text-red-500 transition"
              >
                +998 (95) 897-33-38
              </a>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-red-600 transition">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="text-red-600 transition">
                    <FaFacebookF className="text-2xl" />
                  </a>
                  <a href="#" className="text-red-600 transition">
                    <FaYoutube className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
