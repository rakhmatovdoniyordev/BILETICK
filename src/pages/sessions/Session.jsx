import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { useGetGenerQuery } from "../../redux/api/gener-api";
import { useGetMovieDiscoverQuery } from "../../redux/api/movie-api";

const Session = () => {
  const [params, setParams] = useSearchParams()
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [page, setPage] = useState(params.get("count") || 1);
  const [selectedGenre, setSelectedGenre] = useState(params.get("path") ? params.get("path").split(",").map(Number) : []);
  console.log(selectedGenre);
  const { data: genre } = useGetGenerQuery();
  const { data, isFetching } = useGetMovieDiscoverQuery({
    with_genres: selectedGenre.join(","), page: page,
  });

  useEffect(()=>{
    if(!params.get("path")){
      setSelectedGenre([])
    }else{
      setSelectedGenre(params.get("path").split(",").map(Number)); 
    }
  }, [params.get("path")])

  const handleChange = (id) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre((prev) => {
        const updatedGenres = prev.filter((i) => i !== id);
        setParams({ path: updatedGenres.join(",") });
        return updatedGenres;
      });
    } else {
      setSelectedGenre((prev) => {
        const updatedGenres = [...prev, id];
        setParams({ path: updatedGenres.join(",") });
        return updatedGenres;
      });
    }
    setPage(1)
    setParams({path: selectedGenre, count: 1})
  };
  const handleChangePage = (event, value) => {
    setPage(value);
    const params = new URLSearchParams(value)
    params.set("count", value)
    setParams(params)
  };
  return (
    <section>
      <div className="container">
        <div className="scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-auto scrollbar-thumb-red-500 scrollbar-track-slate-300 scrollbar-h-1">
          <div className="flex items-center gap-3 whitespace-nowrap px-5 mb-5">
            {(isFetching ? Array.from(new Array(12)) : genre?.genres)?.map(
              (item) =>
                item ? (
                  <button
                    onClick={() => handleChange(item.id)}
                    key={item.id}
                    className={`px-5 py-2 border rounded-lg border-black font-aeonik duration-200 ${
                      Mode ? "text-black" : "text-white border-white"
                    } ${
                      selectedGenre.includes(item.id)
                        ? "bg-red-500 text-white border-red-500"
                        : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Skeleton variant="rectangular" width={100} height={42} />
                )
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-14">
          {(isFetching ? Array.from(new Array(12)) : data?.results)?.map(
            (movie, inx) => (
              <div key={inx}>
                <div className={`w-full mb-3`}>
                  {movie ? (
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                        alt=""
                        className="w-full h-[400px]"
                        loading="lazy"
                      />
                    </Link>
                  ) : (
                    <Skeleton variant="rectangular" width={305} height={457} />
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
            )
          )}
        </div>
          <div className="flex justify-center mt-7 select-none">
            <CustomPagination
              count={data?.total_pages > 500 ? 500 : data?.total_pages}
              animation="wave"
              variant="outlined"
              page={page}
              onChange={handleChangePage}
              isDarkMode={Mode}
              size={"large"}
            />
          </div>
      </div>
    </section>
  );
};

export default Session;
