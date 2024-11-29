import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import kunfupanda from "../../assets/kunfu-panda-4.webp";
import dune from "../../assets/dune.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./week.css";
import { FreeMode, Navigation } from "swiper/modules";

const Week = () => {
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  return (
    <section className="mt-[50px]">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <p
            className={`${
              Mode ? "text-black" : "text-white-person"
            } text-[20px] font-medium`}
          >
            На неделе
          </p>
          <Link className="flex items-center gap-1 text-red-person font-medium">
            Показать все <FaAngleRight />
          </Link>
        </div>
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#f00",
              "--swiper-pagination-color": "#fff",
            }}
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div>
                <div className="w-full mb-3">
                  <img src={kunfupanda} alt="" className="w-full h-[400px]" />
                </div>
                <div
                  className={`flex flex-col items-start gap-2 ${
                    Mode ? "text-black" : "text-white"
                  }`}
                >
                  <h2 className="font-aeonik text-[24px] font-medium">
                    Kung Fu Panda 4 ENGLISH
                  </h2>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    Комедия, Фэнтези
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="w-full mb-3">
                  <img src={dune} alt="" className="w-full h-[400px]" />
                </div>
                <div
                  className={`flex flex-col items-start gap-2 ${
                    Mode ? "text-black" : "text-white"
                  }`}
                >
                  <h2 className="font-aeonik text-[24px] font-medium">
                    Dune 2 – EN
                  </h2>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    Фантастика, Боевик
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="w-full mb-3">
                  <img src={dune} alt="" className="w-full h-full" />
                </div>
                <div
                  className={`flex flex-col items-start gap-2 ${
                    Mode ? "text-black" : "text-white"
                  }`}
                >
                  <h2 className="font-aeonik text-[24px] font-medium">
                    Дюна – RU
                  </h2>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    Фантастика, Боевик
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="w-full mb-3">
                  <img src={kunfupanda} alt="" className="w-full h-full" />
                </div>
                <div
                  className={`flex flex-col items-start gap-2 ${
                    Mode ? "text-black" : "text-white"
                  }`}
                >
                  <h2 className="font-aeonik text-[24px] font-medium">
                    Kung Fu Panda 4 ENGLISH
                  </h2>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    Комедия, Фэнтези
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="w-full mb-3">
                  <img src={kunfupanda} alt="" className="w-full h-full" />
                </div>
                <div
                  className={`flex flex-col items-start gap-2 ${
                    Mode ? "text-black" : "text-white"
                  }`}
                >
                  <h2 className="font-aeonik text-[24px] font-medium">
                    Kung Fu Panda 4 RUSSIAN
                  </h2>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    Комедия, Фэнтези
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="w-full mb-3">
                  <img src={kunfupanda} alt="" className="w-full h-full" />
                </div>
                <div
                  className={`flex flex-col items-start gap-2 ${
                    Mode ? "text-black" : "text-white"
                  }`}
                >
                  <h2 className="font-aeonik text-[24px] font-medium">
                    Kung Fu Panda 4 ENGLISH
                  </h2>
                  <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                    Комедия, Фэнтези
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Week;
