import { Skeleton } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { useGetGenerQuery } from "../../redux/api/gener-api";
import { useGetMovieDiscoverQuery } from "../../redux/api/movie-api";
import not from "../../assets/not.jpg";
import Card from "../../components/Card/Card";
import { useTranslation } from "react-i18next";

const Session = () => {
  const {t} = useTranslation()
  document.title = "BILETICK | Genres"
  //useSearchParams- URL parametrini olish va ularni boshqarish uchun kerak
  const [params, setParams] = useSearchParams();
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  // Pagination qiymatini  URL "count" dan olish yoki 1 qiymatini olish
  const [page, setPage] = useState(Number(params.get("count")) || 1);
  //Ganre qiymatini URL "path" dan olish yoki []
  const [selectedGenre, setSelectedGenre] = useState(
    params.get("path") ? params.get("path").split("-").map(Number) : []
  );

  const { data: genre, isFetching: isGenreFetching } = useGetGenerQuery();
  const { data, isFetching: isMovieFetching } = useGetMovieDiscoverQuery({
    with_genres: selectedGenre.join(","),
    page,
    without_genres: "10749,18,99"
  });


  // URL parametrlarini yangilash
  const updateParams = (genres, pageNumber) => {
    const newParams = new URLSearchParams();
    if (genres.length > 0) newParams.set("path", genres.join("-"));
    if (pageNumber) newParams.set("count", pageNumber);
    setParams(newParams);
  };

  // Janrni tanlash yoki bekor qilish
  const handleChange = (id) => {
    const updatedGenres = selectedGenre.includes(id)
      ? selectedGenre.filter((genreId) => genreId !== id)
      : [...selectedGenre, id];

    setSelectedGenre(updatedGenres);
    setPage(1); // Birinchi sahifaga qaytish
    updateParams(updatedGenres, 1);
  };

  // Sahifa o‘zgarishi
  const handleChangePage = (event, value) => {
    setPage(value);
    updateParams(selectedGenre, value);
  };

  // `path` parametrini kuzatib `selectedGenre` ni yangilash
  useEffect(() => {
    const genres = params.get("path")
      ? params.get("path").split("-").map(Number)
      : [];
    setSelectedGenre(genres);
  }, [params]);

  // Tanlangan janrlarni optimallashtirish
  const genreButtons = useMemo(() => {
    if (isGenreFetching) return Array.from({ length: 12 });
    return genre?.genres || [];
  }, [genre, isGenreFetching]);

  // Film malumotlari optimallashtirish
  const movies = useMemo(() => {
    if (isMovieFetching) return Array.from({ length: 12 });
    return data?.results || [];
  }, [data, isMovieFetching]);


  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <section>
      <div className="container">
        <div className="scrollbar scrollbar-thumb-rounded-full scrollbar-track-rounded-full overflow-y-auto scrollbar-thumb-red-500 scrollbar-track-slate-300 scrollbar-h-1">
          <div className="flex items-center gap-3 whitespace-nowrap px-5 mb-5">
            {genreButtons.map((item, index) =>
              item ? (
                <button
                  onClick={() => handleChange(item.id)}
                  key={item.id}
                  className={`px-5 py-2 border rounded-lg font-aeonik duration-200 ${
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
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={100}
                  height={42}
                  sx={{
                    bgcolor: Mode ? "grey.400" : "grey.200",
                    width: "100%",
                    aspectRatio: "1",
                    borderRadius: "4px",
                  }}
                />
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-14 max-[990px]:grid-cols-3 max-[720px]:grid-cols-2 max-[550px]:grid-cols-1">
          <Card data={movies}/>
        </div>
        <div className="flex justify-center mt-7 select-none">
          {data?.total_results > 0 && (
            <CustomPagination
              count={Math.min(data?.total_pages, 500)}
              variant="outlined"
              page={page}
              onChange={handleChangePage}
              isDarkMode={Mode}
              size="large"
            />
          )}
        </div>
        {!data?.total_results && (
          <div className="w-full flex flex-col items-center">
            <img src={not} alt="Not Found" />
            <h2>{t("sessions.title")}</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Session;
