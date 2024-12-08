import { Skeleton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";

const Favourite = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch();
  const favouriteItem = useSelector((state) => state.favourite.items);
  const handleFavourite = (fav) => {
    dispatch(toggleFavourite(fav));
  };
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const isInFavoutite = (id) => favouriteItem.some((item) => item.id === id);
  const navigate = useNavigate()
  document.title = "BILETICK | Saved"
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-4 gap-5 mt-14 max-[990px]:grid-cols-3 max-[720px]:grid-cols-2 max-[550px]:grid-cols-1">
            {
                favouriteItem?.map((movie) => (
                  <div key={movie?.id}>
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
                                ? `${import.meta.env.VITE_IMAGE_URL}${
                                    movie.poster_path
                                  }`
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
                ))
            }
        </div>
        {
            !favouriteItem.length && <div className="w-full h-[400px]">
            <div className={`w-full h-full flex flex-col gap-5 justify-center items-center font-aeonik font-semibold ${
                        Mode ? "text-black" : "text-white"
                      }`}>
              <h2 className="text-center">{t("saved.title")}</h2>
              <p className="text-center">{t("saved.desc")}</p>
              <div>
                  <button className="px-5 py-2 rounded-md bg-red-person text-white font-medium" onClick={()=> navigate("/")}>{t("saved.button")}</button>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default Favourite;
