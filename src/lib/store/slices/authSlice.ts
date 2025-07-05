import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthToken } from '@/lib/types';

interface AuthState {
  user: User | null;
  tokens: AuthToken | null;
  isLoading: boolean;
  error: string | null;
  isInitialized: boolean;
}

const initialState: AuthState = {
  user: null,
  tokens: null,
  isLoading: false,
  error: null,
  isInitialized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.error = null;
      state.isInitialized = true;
    },
    setTokens: (state, action: PayloadAction<AuthToken>) => {
      state.tokens = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    logout: (state) => {
      state.user = null;
      state.tokens = null;
      state.error = null;
      state.isInitialized = true;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setUser,
  setTokens,
  setLoading,
  setError,
  setInitialized,
  updateUser,
  logout,
  clearError,
} = authSlice.actions;

export default authSlice.reducer; 