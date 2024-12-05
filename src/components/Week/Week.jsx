import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./week.css";
import { FreeMode, Navigation } from "swiper/modules";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import not from "../../assets/not.jpg";
import { Skeleton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
// import CustomPagination from "../Pagination/CustomPagination";

const Week = () => {
  // const [page, setPage] = useState(1);
  // const handleChange = (value) => {
  //   setPage(value);
  // };
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const type = "top_rated"
  const {data, isFetching} = useGetMovieQuery({type/* , params: {page} */})

  const isSmall = useMediaQuery({ query: "(max-width: 400px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 401px) and (max-width: 700px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 701px)" });
  const skeletonSize = isSmall
    ? { width: 100, height: 150 }
    : isMedium
    ? { width: 200, height: 300 }
    : { width: 305, height: 457 };
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
          <Link to={"/sessions"} className="flex items-center gap-1 text-red-person font-medium">
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
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              400:{
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              990: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="mySwiper2"
          >
            {
              (isFetching ? Array.from(new Array(4)) : data?.results)?.map((movie, inx) => (
              <SwiperSlide key={movie ? movie.id : inx}>
                <div>
                  <div className={`w-full mb-3`}>
                    {
                      movie ?
                      <Link to={`/movie/${movie.id}`}>
                        <img src={movie.poster_path
                          ? `${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`
                          : not} alt="" className="w-full h-[400px]" loading="lazy"/>
                      </Link>
                      :
                      <Skeleton
                      variant="rectangular"
                      width={skeletonSize.width}
                      height={skeletonSize.height}/>
                    }
                  </div>
                  <div
                    className={`flex flex-col items-start gap-2 ${
                      Mode ? "text-black" : "text-white"
                    }`}
                  >
                    {movie ?
                    <h2 className="font-aeonik text-[24px] font-medium">
                      {movie.original_title}
                    </h2>
                    :
                    <Skeleton variant="text" width={skeletonSize.width} sx={{ fontSize: '2rem' }} />
                    }
                    {
                      movie ?
                      <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                        {movie.vote_average} / 10
                      </p>
                      :
                      <Skeleton variant="text" width={skeletonSize.width} sx={{ fontSize: '1rem' }} />
                    }
                  </div>
                </div>
              </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        {/* <div className="flex justify-center mt-7 select-none">
        <CustomPagination count={data?.total_pages > 500 ? 500 : data?.total_pages} animation='wave' variant="outlined" page={page} onChange={handleChange} isDarkMode={Mode} size={"large"}/>
        </div> */}
      </div>
    </section>
  );
};

export default React.memo(Week);
