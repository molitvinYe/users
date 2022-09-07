import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ABZ_API_URL } from "../store/variables";
import { IUsers } from "../models/IUsers";

export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: ABZ_API_URL,
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUsers, number>({
      query: (page = 1) => ({
        url: "/users",
        params: {
          page: page,
          count: 6,
        },
      }),
      providesTags: result => ["Users"]
    }),

    postUser: build.mutation<IUsers, {token: string, body: FormData}>({
      query: ({token, body}) => ({
        url: "/users",
        method: "POST",
        headers: {
          "token": token
        },
        body: body
      }),
      invalidatesTags: ["Users"]
    }),

    getToken: build.query<{success: boolean, token: string}, null>({
      query: () => ({
        url: "/token",
      }),
    }),
  }),
});