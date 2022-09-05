import { usersAPI } from "../services/UsersService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [usersAPI.reducerPath]: usersAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];