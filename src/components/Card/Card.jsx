import { Skeleton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import not from "../../assets/not.jpg";
import { Link } from "react-router-dom";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const Card = ({ data }) => {
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const dispatch = useDispatch();
  const favouriteItem = useSelector((state) => state.favourite.items);
  const isInFavoutite = (id) => favouriteItem.some((item) => item.id === id);
  const handleFavourite = (fav) => {
    dispatch(toggleFavourite(fav));
  };
  return (
    <>
      {data?.map((movie, index) => (
        <div key={index}>
          <div className="w-full mb-3 relative">
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
              <Link
                to={`/movie/${movie.id}`}
                className={`flex max-[550px]:justify-center`}
              >
                <img
                  src={
                    movie.poster_path
                      ? `${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`
                      : not
                  }
                  alt={movie.original_title || "No image"}
                  className="w-full h-[400px] max-[550px]:w-[70%] max-[550px]:h-auto"
                  loading="lazy"
                />
              </Link>
            ) : (
              <Skeleton
                variant="rectangular"
                sx={{
                  bgcolor: Mode ? "grey.400" : "grey.100",
                  width: "100%",
                  height: "400px",
                  aspectRatio: "1",
                  borderRadius: "4px",
                }}
              />
            )}
          </div>
          <div
            className={`flex flex-col items-start gap-2 max-[550px]:items-center ${
              Mode ? "text-black" : "text-white"
            }`}
          >
            {movie ? (
              <h2 className="font-aeonik text-[24px] font-medium max-[650px]:text-[20px] max-[550px]:text-[18px]">
                {movie.original_title}
              </h2>
            ) : (
              <Skeleton
                variant="text"
                sx={{
                  bgcolor: Mode ? "grey.400" : "grey.100",
                  width: "100%",
                  height: "40px",
                  fontSize: "2rem",
                }}
              />
            )}
            {movie ? (
              <p className="font-aeonik text-[#4D4D4D] text-[14px] font-medium">
                {movie.vote_average} / 10
              </p>
            ) : (
              <Skeleton
                variant="text"
                sx={{
                  bgcolor: Mode ? "grey.400" : "grey.100",
                  width: "20%",
                  fontSize: "2rem",
                  height: "20px",
                  borderRadius: "4px",
                }}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
