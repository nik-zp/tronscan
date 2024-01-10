import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiQuery } from "../services/apiQuery";

export const store = configureStore({
  reducer: {
    [apiQuery.reducerPath]: apiQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiQuery.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
