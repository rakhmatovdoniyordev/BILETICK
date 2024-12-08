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
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation()
  const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
  return (
    <div className="container">
      <footer className={`${Mode ? "bg-[#cfcfcf]" : "bg-[#111111]" } text-white p-8 rounded-lg mb-10 mt-[120px] max-[1100px]:mt-[95px] max-[990px]:mt-[80px] max-[660px]:mt-[50px] max-[450px]:mt-[40px] font-aeonik`}>
          <div className="grid grid-cols-4 max-[990px]:grid-cols-2 max-[510px]:grid-cols-1 max-[550px]: gap-8">
            <div className="flex flex-col justify-between max-[510px]:items-center">
              <div className="mb-4">
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
            <div className={`${Mode ? "text-black" : "text-white-person"} max-[510px]:flex max-[510px]:flex-col max-[510px]:justify-center max-[510px]:items-center`}>
              <h3 className="text-lg font-semibold mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-red-600 transition flex items-center gap-1">
                    <IoNewspaperOutline className="text-[24px] text-red-person"/>
                    {t("footer.public")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" hover:text-red-500 transition flex items-center gap-1"
                  >
                    <BsStars className="text-[24px] text-red-person"/>
                    {t("footer.advertising")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition flex items-center gap-1">
                    <FaRegQuestionCircle className="text-[24px] text-red-person"/>
                    {t("footer.faq")}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600 transition flex items-center gap-1">
                    <BsTelephone className="text-[24px] text-red-person"/>
                    {t("footer.contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${Mode ? "text-black" : "text-white-person"} max-[510px]:flex max-[510px]:flex-col max-[510px]:justify-center max-[510px]:items-center`}>
              <h3 className="text-lg font-semibold mb-4">{t("footer.category")}</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <BiCameraMovie className="text-[24px] text-red-person"/>
                    <span>{t("footer.movie")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <MdTheaterComedy className="text-[24px] text-red-person"/>
                    <span>{t("footer.theater")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <GiMicrophone className="text-[24px] text-red-person"/>
                    <span>{t("footer.concerts")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center space-x-2 hover:text-red-600 transition"
                  >
                    <MdOutlineSportsBasketball  className="text-[24px] text-red-person"/>
                    <span>{t("footer.sport")}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${Mode ? "text-black" : "text-white-person"} max-[510px]:flex max-[510px]:flex-col max-[510px]:justify-center max-[510px]:items-center`}>
              <h3 className="text-lg font-semibold mb-4">{t("footer.contactus")}</h3>
              <a
                href="tel:+998958973338"
                className="text-red-600 text-xl font-semibold hover:text-red-500 transition"
              >
                +998 (95) 897-33-38
              </a>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">{t("footer.social")}</h4>
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

export default React.memo(Footer);
