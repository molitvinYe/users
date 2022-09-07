import { usersAPI } from "../services/UsersService";
import { positionsAPI } from "../services/PositionsService";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pageReducer from './reducers/PageSlice'


const rootReducer = combineReducers({
  [usersAPI.reducerPath]: usersAPI.reducer,
  [positionsAPI.reducerPath]: positionsAPI.reducer,
  pageReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(usersAPI.middleware)
        .concat(positionsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];