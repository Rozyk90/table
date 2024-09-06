import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './slices/filters';
import sortSlice from './slices/sort'
import usersSlice from './slices/users'

export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    sort:sortSlice,
    users:usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;