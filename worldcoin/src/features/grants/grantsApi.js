import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const grantsApi = createApi({
    reducerPath: "grantsApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Grants:'],
    endpoints: (builder) => ({

        getGrants:builder.query({
            query:() => 'grants:',
            providesTags: ['Grants:']
        }),

    })
})
export const { useGetGrantsQuery}=grantsApi