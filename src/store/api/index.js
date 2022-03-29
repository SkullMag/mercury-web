import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mercuryApi = createApi({
    reducerPath: 'mercuryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.mercurydict.com:9090/api/' }),
    endpoints: () => ({}),
  })