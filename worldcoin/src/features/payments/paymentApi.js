import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const paymentApi = createApi({
    reducerPath: "paymentApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Payments'],
    endpoints: (builder) => ({

        getComments:builder.query({
            query:() => 'payments',
            providesTags: ['payments']
        }),

    })   
})
export const { useGetPaymentsQuery}=paymentApi