import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../redux/shopSlice';
import authReducer from '../redux/authSlice';

export const store = configureStore({
  reducer: { shopReducer, authReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
