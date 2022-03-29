import {mercuryApi} from "./index"

const collections = mercuryApi.injectEndpoints({
    endpoints: (builder) => ({
        getPublicCollections: builder.query({
            query: () => "getCollections"
        }),
        getLocalCollections: builder.query({
            query: (token, username) => `getCollections/${token}/${username}`
        })
    })
})

export const { useGetLocalCollectionsQuery, useGetPublicCollectionsQuery } = collections