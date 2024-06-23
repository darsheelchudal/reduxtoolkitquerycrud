import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const TaskApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66777c1a145714a1bd74d7b3.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    tasks: builder.query<Tasks[], void>({
      query: () => "/posts",
    }),
  }),
});
