import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./week.css";
import { FreeMode, Navigation } from "swiper/modules";
import { useGetMovieQuery } from "../../redux/api/movie-api";
import { MOVIE_CATEGORY } from "../../static";
import { Skeleton } from "@mui/material";
import CustomPagination from "../Pagination/CustomPagination";

const Week = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [type, setType] = useState("now_playing")
  const {data, isFetching} = useGetMovieQuery({type, params: {page}})
  const handleChangeType = (item) => {
    setType(item)
    setPage(1)
  }
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
        <div className="flex justify-center gap-3 mb-8">
          {
            MOVIE_CATEGORY?.map(category => (
              <NavLink
                key={category.id}
                onClick={()=> handleChangeType(category.path)}
                className=''
                >
                  <p className={`px-6 py-2 border border-red-person rounded-md font-aeonik ${Mode ? "text-black" : "text-white"}`}>{category.title}</p>
              </NavLink>
            ))
          }
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
            {
              (isFetching ? Array.from(new Array(4)) : data?.results)?.map((movie, inx) => (
              <SwiperSlide key={movie ? movie.id : inx}>
                <div>
                  <div className={`w-full mb-3`}>
                    {
                      movie ?
                      <Link to={`/movie/${movie.id}`}>
                        <img src={import.meta.env.VITE_IMAGE_URL + movie.poster_path} alt="" className="w-full h-[400px]" loading="lazy"/>
                      </Link>
                      :
                      <Skeleton variant="rectangular" width={305} height={457} />
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
                    <Skeleton variant="text" width={305} sx={{ fontSize: '2rem' }} />
                    }
                    {
                      movie ?
                      <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                        {movie.vote_average} / 10
                      </p>
                      :
                      <Skeleton variant="text" width={305} sx={{ fontSize: '1rem' }} />
                    }
                  </div>
                </div>
              </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className="flex justify-center mt-7 select-none">
        <CustomPagination count={data?.total_pages > 500 ? 500 : data?.total_pages} animation='wave' variant="outlined" page={page} onChange={handleChange} isDarkMode={Mode} size={"large"}/>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Week);
