import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../model/Task.model";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66777c1a145714a1bd74d7b3.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
