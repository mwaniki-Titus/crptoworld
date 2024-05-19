import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionApi = createApi({
    reducerPath: "transactionApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Transactions'],
    endpoints: (builder) => ({

        getComments:builder.query({
            query:() => 'transactions',
            providesTags: ['Transactions']
        }),

    
     })
})
export const { useGetCommentsQuery,}=transactionApi