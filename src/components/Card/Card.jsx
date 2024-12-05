import { Skeleton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import not from "../../assets/not.jpg";
import { Link } from 'react-router-dom'

const Card = ({data}) => {
    const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  return (
    <>
        {data?.map((movie, index) => (
            <div key={index}>
              <div className="w-full mb-3">
                {movie ? (
                  <Link to={`/movie/${movie.id}`} className={`flex max-[550px]:justify-center`}>
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
                  <Skeleton variant="rectangular" width={305} height={457} />
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
          ))}
    </>
    )
}

export default Card