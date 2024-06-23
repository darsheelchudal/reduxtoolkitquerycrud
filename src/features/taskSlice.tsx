import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../model/Task.model";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66777c1a145714a1bd74d7b3.mockapi.io/api/v1",
  }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => ({
        url: "/tasks",
      }),
      providesTags: ["Task"],
      transformResponse: (response: Task[], meta, args: any) => {
        if (args === 2) {
          return response.slice(0, 4);
        } else {
          return response;
        }
      },  
    }),
    getSingleTask: builder.query<Task, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
      }),
      providesTags: ["Task"],
    }),
    createTasks: builder.mutation<void, Task>({
      query: (task) => ({
        url: "/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTasks: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
    updateTasks: builder.mutation<void, Task>({
      query: ({ id, ...rest }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTasksMutation,
  useDeleteTasksMutation,
  useGetSingleTaskQuery,
  useUpdateTasksMutation,
} = taskApi;
