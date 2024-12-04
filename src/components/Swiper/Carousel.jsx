import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import play from "../../assets/play.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Carousel.css";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";

const Carousel = () => {
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { data, isFetching } = useGetMovieQuery({
    type: "upcoming",
    params: { page: 1 },
  });
  const apiData = data?.results.slice(0, 6);
  return (
    <>
      <div className="max-w-[1390px] mx-auto px-4 w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#f00",
            "--swiper-pagination-color": "#fff",
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
              className={`rounded-xl ${
                Mode ? "" : "border-[2px] border-white"
              }`}
            >
              <div className="relative w-full overflow-hidden h-[640px]">
                {item ? (
                  <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${
                      item.backdrop_path
                    }`}
                    alt={item.original_title}
                    className="rounded-xl h-full object-contain"
                  />
                ) : (
                  <Skeleton variant="rectangular" className="z-40" width={1390} height={640} sx={{
                    bgcolor: Mode ? "" : "white",
                  }}/>
                )}
                {
                  isFetching ?
                  <></>
                  :
                  <div className="w-full h-full absolute z-30 bottom-0 left-[50%] translate-x-[-50%] bg-radial-[at_100%_100%] text-white flex  gra">
                    <div className="absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4">
                      <h2>{item?.original_title}</h2>
                      <p>
                        2{item?.release_date} •{" "}
                        {item?.original_language.toUpperCase()} • average:{" "}
                        {item?.vote_average}
                      </p>
                      <button className="flex items-center justify-center bg-white-person px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold">
                        <img src={play} alt="play" />
                        Смотреть
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
                className={`rounded-lg ${
                  Mode ? "border-none" : "border-2 border-white"
                }`}
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
                  <Skeleton variant="rectangular" width={332} height={187}/>
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
