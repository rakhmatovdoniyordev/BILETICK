import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import { useGetMovieDetailsQuery } from "../../redux/api/movie-api";
import imdb from "../../assets/IMDb.png";
import play from "../../assets/play.png"

const MovieDetail = () => {
  const { id } = useParams();
  const { data: movie, isFetching } = useGetMovieDetailsQuery(id);
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isFetching) {
    return (
      <section className="mt-[50px] px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={450}
              className="rounded-lg md:w-1/3"
            />
            <div className="w-full md:w-2/3">
              <Skeleton
                variant="text"
                width="80%"
                height={48}
                className="mb-4"
              />
              <Skeleton
                variant="text"
                width="60%"
                height={28}
                className="mb-2"
              />
              <Skeleton
                variant="text"
                width="40%"
                height={28}
                className="mb-2"
              />
              <Skeleton
                variant="text"
                width="70%"
                height={28}
                className="mb-4"
              />
              <Skeleton
                variant="text"
                width="100%"
                height={24}
                className="mb-1"
              />
              <Skeleton
                variant="text"
                width="100%"
                height={24}
                className="mb-1"
              />
              <Skeleton
                variant="text"
                width="100%"
                height={24}
                className="mb-1"
              />
              <Skeleton variant="text" width="80%" height={24} />
            </div>
          </div>
          <div>
          <Skeleton
                variant="rectangular"
                width="100%"
                height={700}
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
    <section
      className={`mt-[50px] font-aeonik ${Mode ? "text-black" : "text-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
          />
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">{movie.title}</h1>
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
            <div className="flex items-center mb-2">
              <p className="text-base md:text-lg mr-2">
                <span className="font-semibold">Rating:</span>{" "}
                {movie.vote_average} / 10
              </p>
              <img src={imdb} alt="IMDb"/>
            </div>
            <p className="text-lg md:text-xl mb-4">
              <span className="font-semibold">Total accumulated votes:</span>{" "}
              {movie.vote_count}
            </p>
            <button className={`flex items-center justify-center bg-white-person px-4 md:px-[130px] py-3 rounded-lg text-red-person gap-3 font-semibold w-full md:w-auto ${Mode ? "border-[1px] border-black" : ""}`}>
              <img src={play} alt="play" className="w-6 h-6" />
              Смотреть
            </button>
          </div>
        </div>
        <div
          className="w-full h-[700px] mt-10 flex items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_IMAGE_URL}${
              movie.backdrop_path
            })`,
          }}
        >
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 w-full px-4">
            {movie.production_companies.map((item) => (
              <div key={item.id} className="p-3 rounded-xl backdrop-blur-md bg-[#fcfcfc80]">
                <p className="text-center text-lg md:text-xl mb-2">Production Company:</p>
                <div className="flex flex-col items-center">
                  <img
                    src={import.meta.env.VITE_IMAGE_URL + item.logo_path}
                    alt={item.name}
                    className="w-full max-w-[200px] h-[80px] object-contain mb-2"
                  />
                  <h3 className="text-center text-base md:text-lg font-semibold">{item.name}</h3>
                  <p className="text-center text-sm md:text-base">Country: {item.origin_country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
