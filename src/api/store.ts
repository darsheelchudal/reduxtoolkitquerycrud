import { configureStore } from "@reduxjs/toolkit";
import { taskApi } from "../features/taskSlice";

const store = configureStore({
      reducer:{
        [taskApi.reducerPath]:taskApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(taskApi.middleware),
  });

export default store;