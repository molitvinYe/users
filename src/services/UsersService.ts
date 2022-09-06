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
      query: (page) => ({
        url: "/users",
        params: {
          page: page,
          count: 6,
        },
      })
    }),
  }),
});