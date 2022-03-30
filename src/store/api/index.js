import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mercuryApi = createApi({
    reducerPath: 'mercuryApi',
    tagTypes: ["LocalCollection", "PublicCollection"],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.mercurydict.com:9090/api/' }),
    endpoints: () => ({}),
  })