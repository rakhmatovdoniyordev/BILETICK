import { api } from './index'

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: ({type, params}) => ({
        url: `/movie/${type}`,
        params
      }),
      providesTags: ["Movie"]
    }),
    getMovieDetails: build.query({
      query: (movieId) => ({
        url: `/movie/${movieId}`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
        providesTags: ["Movie"]
      }),
    }),
    getMovieDiscover: build.query({
      query: (params) => ({
        url: `/discover/movie`,
        params
      }),
      providesTags: ["Movie"]
    }),
    getMovieSimilar: build.query({
      query: (id) => ({
        url: `/movie/${id}/similar`,
      }),
      providesTags: ["Movie"]
    }),
    getMovieImage: build.query({
      query: (id) => ({
        url: `/movie/${id}/images`,
      }),
      providesTags: ["Movie"]
    }),
    getMovieSearch: build.query({
      query: (params) => ({
        url: `search/movie`,
        params
      }),
      providesTags: ["Movie"]
    }),
  }),
})


export const {
    useGetMovieQuery,
    useGetMovieDetailsQuery,
    useGetMovieDiscoverQuery,
    useGetMovieSimilarQuery,
    useGetMovieImageQuery,
    useGetMovieSearchQuery
} = movieApi