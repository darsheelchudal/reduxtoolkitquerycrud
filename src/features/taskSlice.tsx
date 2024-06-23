import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Task } from "../model/tasks.model";

export const TaskApi = createApi({
  reducerPath: "TaskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66777c1a145714a1bd74d7b3.mockapi.io/api/v1",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
    }),
  }),
});

export const { useGetTasksQuery } = TaskApi;
