import { api } from "@/redux/api/apiSlice";

const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),
        userRegister: builder.mutation({
            query: (data) => ({
                url: '/user/create-user',
                method: 'POST',
                body: data
            })
        })
    })
})
export const { useUserLoginMutation, useUserRegisterMutation } = authApi;