import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task } from "../model/tasks.model";

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

// The generated hooks should be available here
export const { useGetTasksQuery } = taskApi;
