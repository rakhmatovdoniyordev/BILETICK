import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import play from "../../assets/play.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Carousel.css";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { useTranslation } from "react-i18next";

const Carousel = () => {
  const {t} = useTranslation()
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, isFetching } = useGetMovieQuery({
    type: "upcoming",
    params: { page: 1 },
  });
  const apiData = data?.results.slice(0, 6);
  return (
    <>
      <div className={`max-w-[1390px] mx-auto px-4 w-full ${Mode ? "bg-white-person" : "bg-black"}`}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#f00",
          }}
          spaceBetween={10}
          navigation={true}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {(isFetching ? Array.from(new Array(4)) : apiData)?.map((item) => (
            <SwiperSlide
              key={item?.id}
              className={`rounded-xl`}
            >
              <div className="relative w-full rounded-xl overflow-hidden h-[640px] max-[768px]:h-[480px] max-[480px]:h-[360px] max-[300px]:h-[240px]">
                {item ? (
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${
                      item.backdrop_path
                    }`}
                    alt={item.original_title}
                    className="rounded-xl h-full object-contain"
                  />
                ) : (
                  <Skeleton variant="rectangular" className="z-40" sx={{
                    bgcolor: Mode ? "grey.400" : "grey.300",
                    width: "100%",
                    height: "640px",
                    aspectRatio: "1",
                    borderRadius: "4px",
                  }}/>
                )}
                {
                  !isFetching &&
                  <div className="w-full h-full absolute z-30 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white flex  gra">
                    <div className="absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4">
                      <h2 className="text-2xl font-bold mb-2 max-[480px]:text-xl max-[300px]:text-lg">{item?.original_title}</h2>
                      <p className="mb-4 text-sm max-[300px]:text-xs">
                        2{item?.release_date} •{" "}
                        {item?.original_language.toUpperCase()} • average:{" "}
                        {item?.vote_average}
                      </p>
                      <button className="flex items-center justify-center bg-white-person px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold max-[480px]:px-4 max-[300px]:text-sm whitespace-nowrap max-[550px]:text-[14px]">
                        <img src={play} alt="play" />
                        {t("play")}
                      </button>
                    </div>
                  </div>
                }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {(isFetching ? Array.from(new Array(4)) : apiData)?.map(
            (item, index) => (
              <SwiperSlide
                key={`thumb-${item?.id ?? index}`}
                className={`rounded-lg`}
              >
                {item ? (
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${
                      item?.backdrop_path
                    }`}
                    alt={item?.title}
                    className="rounded-lg w-full h-[187px] object-cover"
                  />
                ) : (
                  <Skeleton variant="rectangular" sx={{
                    bgcolor: Mode ? "grey.400" : "grey.300",
                    width: "100%",
                    height: {
                      xs: 60,  // 0-600px (kichik ekranlar)
                      sm: 100,  // 600-960px (kichik o'rta ekranlar)
                      md: 170,  // 960-1280px (o'rta ekranlar)
                      lg: 200,  // 1280px va undan katta (katta ekranlar)
                    },
                    aspectRatio: "1",
                    borderRadius: "4px",
                  }}/>
                )}
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </>
  );
};

export default React.memo(Carousel);
