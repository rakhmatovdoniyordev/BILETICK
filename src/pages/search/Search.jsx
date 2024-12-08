import React, { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useGetMovieSearchQuery } from "../../redux/api/movie-api";
import Card from "../../components/Card/Card";
import { useSearchParams } from "react-router-dom";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { useTranslation } from "react-i18next";

const Search = () => {
  const {t} = useTranslation()
  const Mode = useSelector((state) => state.isDarkMode.isDarkMode);
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const { data, isFetching } = useGetMovieSearchQuery({ query: search,
  page, include_adult: false }, { skip: !search });
  document.title = "BILETICK | Search"

  const updateParams = (search, pageNumber) => {
    const newParams = new URLSearchParams();
    if (search.length > 0) newParams.set("q", search);
    if (pageNumber) newParams.set("page", pageNumber);
    setSearchParams(newParams);
  };

  const handleSubmit = e => {
    e.preventDefault()
    let value = searchValue
    setSearch(value)
    updateParams(value, 1)
    setPage(1)
  }
  const handleChangePage = (event, value) => {
    setPage(value);
    updateParams(searchValue, value);
  };
  useEffect(()=>{
    let query = searchParams.get("q")
    if(query){
      setSearchValue(query)
      setSearch(query)
    }
  }, [])
  const movies = useMemo(() => {
    if (isFetching) return Array.from({ length: 12 });
    return data?.results || [];
  }, [data, isFetching]);
  return (
    <section className="mt-12">
      <div className="container">
        <div className="w-full flex justify-center items-center">
          <form action="" className="flex relative w-[380px]" onSubmit={handleSubmit}>
            <FiSearch
              className={`absolute top-[50%] translate-y-[-50%] left-5 text-2xl text-red-person ${
                Mode ? "bg-[#c5c5c5d8]" : "bg-[#111111]"
              }`}
            />
            <input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              type="search"
              className={`p-5 rounded-xl indent-7 flex flex-wrap text-xl ${
                Mode
                  ? "bg-[#c5c5c5d8] outline-red-person"
                  : "bg-[#111111] text-white"
              } border-none w-full`}
            />
          </form>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10 max-[990px]:grid-cols-3 max-[720px]:grid-cols-2 max-[550px]:grid-cols-1">
          <Card data={movies} />
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
          <div
            className={`w-full h-[400px] flex justify-center items-center font-aeonik text-xl font-semibold ${
              Mode ? "" : "text-[#4D4D4D]"
            }`}
          >
            <div className="flex flex-col items-center gap-10">
              <h4>{t("search.title")}</h4>
              <p className="text-center">{t("search.desc")}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
