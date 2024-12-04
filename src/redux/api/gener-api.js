import { api } from './index'

export const generApi = api.injectEndpoints({
  endpoints: (build) => ({
    getGener: build.query({
      query: () => ({
        url: `/genre/movie/list`,
      }),
      providesTags: ["Gener"]
    }),
  }),
})


export const {
    useGetGenerQuery,
} = generApi