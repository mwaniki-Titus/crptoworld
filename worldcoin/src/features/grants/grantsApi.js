import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const grantsApi = createApi({
    reducerPath: "grantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    tagTypes: ['Grants'],
    endpoints: (builder) => ({
        getGrants: builder.query({
            query: () => 'all/grants',
            providesTags: ['Grants']
        }),
        createGrant: builder.mutation({
            query: (newGrant) => ({
                url: 'create/grant',
                method: 'POST',
                body: newGrant,
            }),
            invalidatesTags: ['Grants'],
        }),
    }),
});

export const { useGetGrantsQuery, useCreateGrantMutation } = grantsApi;
