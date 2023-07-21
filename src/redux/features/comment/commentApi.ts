import { api } from "@/redux/api/apiSlice";

const commentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBookComments : builder.query({
            query: (id) => `/comment/book-comments/${id}`,
            providesTags: ['comments']
        }),
        addBookComment : builder.mutation({
            query: (comment) => ({
                url: "/comment/create",
                method: 'POST',
                body: comment
            }),
            invalidatesTags: ['comments']
        })
    })
})
export const {useGetBookCommentsQuery, useAddBookCommentMutation} = commentApi;