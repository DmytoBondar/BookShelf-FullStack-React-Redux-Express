import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book'
        }),
        getSingleBook: builder.query({
            query: (id) => `/book/${id}`
        })
    })
})
export const { useGetBooksQuery, useGetSingleBookQuery } = bookApi;