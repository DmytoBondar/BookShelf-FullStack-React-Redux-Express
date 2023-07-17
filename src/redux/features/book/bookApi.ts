import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/book'
        })
    })
})
export const { useGetBooksQuery } = bookApi;