import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000/api/'}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['Users']
        }),
        registerUser: builder.mutation({
            query: (user) => ({
                url: 'users/register',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: 'user/login',
                method: 'POST',
                body: credentials
            }),
            invalidatesTags: ['Users']
        }),
        getUserDetails: builder.query({
            query: (id) => `users/${id}`,
            providesTags: ['Users']
        }),
    })
});

export const {
    useGetUsersQuery,
    useRegisterUserMutation,
    useLoginUserMutation, 
    useGetUserDetailsQuery,
} = userApi;
