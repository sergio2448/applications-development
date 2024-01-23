import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  profilePicture: string | null;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  profilePicture: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { login, logout, setProfilePicture } = authSlice.actions;
export default authSlice.reducer;
