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
      }),
    }),
  }),
})


export const {
    useGetMovieQuery,
    useGetMovieDetailsQuery
} = movieApi