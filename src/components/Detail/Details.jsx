import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import {
  useGetMovieDetailsQuery,
  useGetMovieImageQuery,
  useGetMovieSimilarQuery,
} from "../../redux/api/movie-api";
import imdb from "../../assets/IMDb.png";
import play from "../../assets/play.png";
import MovieCard from "../Card/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Detail.css";
import { FreeMode, Navigation } from "swiper/modules";
import DetailsImages from "./DetailsImages";
import not from "../../assets/not.jpg";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";
import { useTranslation } from "react-i18next";

const MovieDetail = () => {
  const {t} = useTranslation()
  //ID olish uchun
  const { id } = useParams();
  //Filmni apidan olish uchun
  const { data: movie, isFetching } = useGetMovieDetailsQuery(id);
  //Filmga aloqador o'xshash filmlarni apidan olish
  const { data } = useGetMovieSimilarQuery(id);
  //Film rasmlarini Apidan olish
  const { data: images } = useGetMovieImageQuery(id);
  // Redux-toolkitdan Mode olish
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [activeTab, setActiveTab] = useState("tickets");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const dispatch = useDispatch();
  const favouriteItem = useSelector((state) => state.favourite.items);
  const isInFavoutite = (id) => favouriteItem.some((item) => item.id === id);
  const handleFavourite = (fav) => {
    dispatch(toggleFavourite(fav));
  };

  document.title = movie? movie?.title : "BILETICK";
  // Malumot kelguncha Skeleton loading chiqishi
  if (isFetching) {
    return (
      <section className="mt-[50px] px-4">
        <div className="container mx-auto">
          <div>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={700}
              className="rounded-lg md:w-1/3 mt-10"
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Skeleton
              variant="rectangular"
              width={400}
              height={200}
              className="rounded-lg md:w-1/3 mt-10"
            />
            <Skeleton
              variant="rectangular"
              width={400}
              height={200}
              className="rounded-lg md:w-1/3 mt-10"
            />
            <Skeleton
              variant="rectangular"
              width={400}
              height={200}
              className="rounded-lg md:w-1/3 mt-10"
            />
          </div>
        </div>
      </section>
    );
  }

  if (!movie) {
    return <div className="container mt-[50px] px-4">Фильм не найден</div>;
  }

  return (
    <section className={` font-aeonik ${Mode ? "text-black" : "text-white"}`}>
      <div className="container">
        <div>
          <DetailsImages data={images} />
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 w-full">
            {movie.production_companies.map((item) => (
              <div
                key={item.id}
                className={`${
                  Mode ? "bg-[#cfcfcf]" : "bg-[#111111]"
                } p-3 rounded-xl backdrop-blur-md`}
              >
                <p className="text-center text-lg md:text-xl mb-2">
                  Production Company:
                </p>
                <div className="flex flex-col items-center">
                  <img
                    src={import.meta.env.VITE_IMAGE_URL + item.logo_path}
                    alt={item.name}
                    className="w-full max-w-[200px] h-[80px] object-contain mb-2"
                  />
                  <h3 className="text-center text-base md:text-lg font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-center text-sm md:text-base">
                    Country: {item.origin_country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10">
          <div className="flex bg-[#111111] rounded-xl  max-w-[380px] max-[550px]:max-w-[250px] mx-auto">
            <button
              onClick={() => setActiveTab("tickets")}
              className={`px-6 py-3 text-lg rounded-xl w-1/2 ${
                activeTab === "tickets"
                  ? "text-red-600 bg-[#1D1D1D]"
                  : "text-white"
              }`}
            >
              {t("detail.ticket")}
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-3 text-lg rounded-xl whitespace-nowrap w-1/2 ${
                activeTab === "about"
                  ? "text-red-600 bg-[#1D1D1D]"
                  : "text-white"
              }`}
            >
              {t("detail.aboutfilm")}
            </button>
          </div>
          {activeTab === "tickets" ? (
            <MovieCard />
          ) : (
            <>
              <div className="flex flex-col md:flex-row gap-8 mt-10">
                <img
                  src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
                />
                <div className="w-full md:w-2/3">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4">
                    {movie.title}
                  </h1>
                  <p className="text-base md:text-lg mb-2">
                    <span className="font-semibold">Release date:</span>{" "}
                    {movie.release_date}
                  </p>
                  <p className="text-base md:text-lg mb-2">
                    <span className="font-semibold">Country :</span>{" "}
                    {movie.origin_country}
                  </p>
                  <p className="text-base md:text-lg mb-2">
                    <span className="font-semibold">Popularity :</span>{" "}
                    {movie.popularity}
                  </p>
                  <p className="text-base md:text-lg mb-4">
                    <span className="font-semibold">Genres:</span>{" "}
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </p>
                  <p className="text-base md:text-lg mb-4">{movie.overview}</p>
                  <p className="text-base md:text-lg mr-2">
                    <span className="font-semibold">Budget:</span>{" "}
                    {movie.budget.brm()} $
                  </p>
                  <div className="flex items-center mb-2">
                    <p className="text-base md:text-lg mr-2">
                      <span className="font-semibold">Rating:</span>{" "}
                      {movie.vote_average} / 10
                    </p>
                    <img src={imdb} alt="IMDb" />
                  </div>
                  <p className="text-lg md:text-xl mb-4">
                    <span className="font-semibold">
                      Total accumulated votes:
                    </span>{" "}
                    {movie.vote_count}
                  </p>
                  <button
                    className={`flex items-center justify-center bg-white-person px-4 md:px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold w-full md:w-auto ${
                      Mode ? "border-[1px] border-black" : ""
                    }`}
                  >
                    <img src={play} alt="play" className="w-6 h-6" />
                    {t("play")}
                  </button>
                </div>
              </div>
              <div className="mt-16">
                <div className="mb-10">
                  <h2 className="text-4xl">{t("detail.similar")}</h2>
                </div>
                <div>
                  {!data.total_results ? (
                    <div className="w-full h-[200px] flex justify-center items-center">
                      <h2 className="font-aeonik text-[28px] font-semibold">
                        {t("detail.notsimilar")}
                      </h2>
                    </div>
                  ) : (
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
                        400: {
                          slidesPerView: 2,
                          spaceBetween: 15,
                        },
                        700: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        990: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                      }}
                      freeMode={true}
                      navigation={true}
                      modules={[FreeMode, Navigation]}
                      className="mySwiper2"
                    >
                      {(isFetching
                        ? Array.from(new Array(4))
                        : data?.results
                      )?.map((movie, inx) => (
                        <SwiperSlide key={movie ? movie.id : inx}>
                          <div>
                            <div className={`w-full h-[400px] mb-3 relative`}>
                              <div className="w-10 h-10 bg-red-person flex justify-center items-center rounded-full absolute right-2 top-2 cursor-pointer">
                                {isInFavoutite(movie?.id) ? (
                                  <BsBookmarkFill
                                    onClick={() => handleFavourite(movie)}
                                    className="text-xl text-white"
                                  />
                                ) : (
                                  <BsBookmark
                                    onClick={() => handleFavourite(movie)}
                                    className="text-xl text-white"
                                  />
                                )}
                              </div>
                              {movie ? (
                                <Link to={`/movie/${movie.id}`}>
                                  <img
                                    src={
                                      movie.poster_path
                                        ? `${import.meta.env.VITE_IMAGE_URL}${
                                            movie.poster_path
                                          }`
                                        : not
                                    }
                                    alt={movie.name}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                  />
                                </Link>
                              ) : (
                                <Skeleton
                                  variant="rectangular"
                                  width={305}
                                  height={457}
                                />
                              )}
                            </div>
                            <div
                              className={`flex flex-col items-start gap-2 ${
                                Mode ? "text-black" : "text-white"
                              }`}
                            >
                              {movie ? (
                                <h2 className="font-aeonik text-[24px] font-medium">
                                  {movie.original_title}
                                </h2>
                              ) : (
                                <Skeleton
                                  variant="text"
                                  width={305}
                                  sx={{ fontSize: "2rem" }}
                                />
                              )}
                              {movie ? (
                                <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                                  {movie.vote_average} / 10
                                </p>
                              ) : (
                                <Skeleton
                                  variant="text"
                                  width={305}
                                  sx={{ fontSize: "1rem" }}
                                />
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
