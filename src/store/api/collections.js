import { mercuryApi } from "./index"

const collections = mercuryApi.injectEndpoints({
    endpoints: (builder) => ({
        getPublicCollections: builder.query({
            query: () => "getCollections",
            providesTags: ["PublicCollection"]
        }),
        getLocalCollections: builder.query({
            query: (token, username) => `getCollections/${token}/${username}`,
            providesTags: ["PublicCollection"]
        }),
        deleteCollection: builder.mutation({
            query: (token, collectionName) => ({
                url: `deleteCollection/${token}/${collectionName}`,
                method: "DELETE"
            }),
            invalidatesTags: ["LocalCollection", "PublicCollection"]
        }),
        createCollection: builder.mutation({
            query: ({token, collectionName}) => ({
                url: `createCollection/${token}/${collectionName}`,
                method: "POST"
            }),
            invalidatesTags: ["LocalCollection", "PublicCollection"]
        })
    })
})

export const { 
    useGetLocalCollectionsQuery, 
    useGetPublicCollectionsQuery,
    useDeleteCollectionMutation,
    useCreateCollectionMutation, 
} = collections