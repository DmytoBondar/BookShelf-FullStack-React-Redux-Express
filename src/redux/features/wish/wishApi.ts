import { api } from "@/redux/api/apiSlice";

const wishApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createWish: builder.mutation({
            query: (data) => ({
                url: `/wish/create`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['wish']
        }),
        getUserWish: builder.query({
            query: (id) => `/wish/${id}`,
            providesTags: ['wish']
        }),
        deleteUserWish: builder.mutation({
            query: (id) => ({
                url: `/wish/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['wish']
        }),
    })
})
export const { useCreateWishMutation, useDeleteUserWishMutation, useGetUserWishQuery } = wishApi;