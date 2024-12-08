import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./week.css";
import { FreeMode, Navigation } from "swiper/modules";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import not from "../../assets/not.jpg";
import { Skeleton } from "@mui/material";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";
import { useTranslation } from "react-i18next";
// import CustomPagination from "../Pagination/CustomPagination";

const Week = () => {
  const {t} = useTranslation()
  // const [page, setPage] = useState(1);
  // const handleChange = (value) => {
  //   setPage(value);
  // };
  const dispatch = useDispatch()
  const favouriteItem = useSelector((state) => state.favourite.items);
  const handleFavourite = (fav) => {
    dispatch(toggleFavourite(fav))
  }
  const isInFavoutite = (id) => favouriteItem.some(item => item.id === id)
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const type = "top_rated"
  const {data, isFetching} = useGetMovieQuery({type/* , params: {page} */, without_genres: "10749,18"})
  return (
    <section className="mt-[50px]">
      <div className="container">
        <div className="flex justify-between items-center mb-5">
          <p
            className={`${
              Mode ? "text-black" : "text-white-person"
            } text-[20px] font-medium`}
          >
            {t("week.weeks")}
          </p>
          <Link to={"/sessions"} className="flex items-center gap-1 text-red-person font-medium">
            {t("week.button")} <FaAngleRight />
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
              (isFetching ? Array.from(new Array(4)) : data?.results)?.map((movie) => (
              <SwiperSlide key={movie?.id}>
                <div key={movie?.id}>
                  <div className={`w-full mb-3 relative`}>
                    <div className="w-10 h-10 bg-red-person flex justify-center items-center rounded-full absolute right-2 top-2 cursor-pointer">
                      {
                        isInFavoutite(movie?.id) ?
                        <BsBookmarkFill onClick={()=> handleFavourite(movie)} className="text-xl text-white"/>
                        :
                        <BsBookmark onClick={()=> handleFavourite(movie)} className="text-xl text-white"/>
                      }
                    </div>
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
                      sx={{
                        bgcolor: Mode ? "grey.400" : "grey.300",
                        width: "80%",
                        height: "400px",
                        aspectRatio: "1",
                        borderRadius: "4px",
                      }}/>
                    }
                  </div>
                  <div
                    className={`flex flex-col items-start gap-2 ${
                      Mode ? "text-black" : "text-white"
                    }`}
                  >
                    {movie ?
                    <h2 className="font-aeonik text-[24px] font-medium text-left">
                      {movie.original_title}
                    </h2>
                    :
                    <Skeleton variant="text" sx={{
                      bgcolor: Mode ? "grey.400" : "grey.300",
                      width: "80%",
                      height: "40px",
                      fontSize: "2rem",
                      borderRadius: "4px",
                    }}/>
                    }
                    {
                      movie ?
                      <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                        {movie.vote_average} / 10
                      </p>
                      :
                      <Skeleton variant="text" sx={{
                        bgcolor: Mode ? "grey.400" : "grey.300",
                        width: "20%",
                        fontSize: "2rem",
                        height: "20px",
                        borderRadius: "4px",
                      }}/>
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
