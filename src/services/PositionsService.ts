import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ABZ_API_URL } from "../store/variables";
import { IPositions } from "../models/IPositions";

export const positionsAPI = createApi({
  reducerPath: "positionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: ABZ_API_URL,
  }),
  tagTypes: ["Positions"],
  endpoints: (build) => ({
    fetchAllPositions: build.query<IPositions, null>({
      query: () => ({
        url: "/positions",
      })
    }),
  }),
});