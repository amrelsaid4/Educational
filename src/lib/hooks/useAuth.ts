'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useState, useCallback, useEffect } from 'react';
import { UserRole, DASHBOARD_ROUTES } from '@/constants';
import { User, LoginCredentials, RegisterData, AuthToken } from '@/lib/types';
import { RootState } from '@/lib/store/store';
import { 
  setUser, 
  setLoading, 
  setError, 
  logout as logoutAction,
  setTokens 
} from '@/lib/store/slices/authSlice';

interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: UserRole) => boolean;
  redirectToDashboard: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = useLocale();
  
  const { user, isLoading, error, tokens } = useSelector(
    (state: RootState) => state.auth
  );
  
  const isAuthenticated = !!user && !!tokens?.accessToken;
  
  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedUser = localStorage.getItem('auth_user');
        const storedTokens = localStorage.getItem('auth_tokens');
        
        if (storedUser && storedTokens) {
          const user = JSON.parse(storedUser);
          const tokens = JSON.parse(storedTokens);
          
          // Check if tokens are still valid
          if (tokens.accessToken && new Date().getTime() < tokens.expiresAt) {
            dispatch(setUser(user));
            dispatch(setTokens(tokens));
          } else {
            // Clean up expired tokens
            localStorage.removeItem('auth_user');
            localStorage.removeItem('auth_tokens');
          }
        }
      } catch (error) {
        console.error('Error initializing auth state:', error);
        localStorage.removeItem('auth_user');
        localStorage.removeItem('auth_tokens');
      }
    };
    
    initializeAuth();
  }, [dispatch]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      // Store user and tokens
      const { user, tokens: authTokens } = data.data;
      
      dispatch(setUser(user));
      dispatch(setTokens(authTokens));
      
      // Persist to localStorage
      localStorage.setItem('auth_user', JSON.stringify(user));
      localStorage.setItem('auth_tokens', JSON.stringify(authTokens));
      
      // Redirect to appropriate dashboard
      redirectToDashboard(user.role);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, router, locale]);

  const register = useCallback(async (data: RegisterData) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }
      
      // Auto-login after successful registration
      await login({
        email: data.email,
        password: data.password,
      });
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, login]);

  const logout = useCallback(() => {
    dispatch(logoutAction());
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_tokens');
    router.push(`/${locale}/login`);
  }, [dispatch, router, locale]);

  const forgotPassword = useCallback(async (email: string) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send reset email');
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send reset email';
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const resetPassword = useCallback(async (token: string, password: string) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to reset password');
      }
      
      // Redirect to login page
      router.push(`/${locale}/login`);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to reset password';
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, router, locale]);

  const verifyEmail = useCallback(async (token: string) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    
    try {
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to verify email');
      }
      
      // Update user's email verification status
      if (user) {
        const updatedUser = { ...user, isEmailVerified: true };
        dispatch(setUser(updatedUser));
        localStorage.setItem('auth_user', JSON.stringify(updatedUser));
      }
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to verify email';
      dispatch(setError(errorMessage));
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, user]);

  const hasPermission = useCallback((permission: string): boolean => {
    if (!user) return false;
    return user.permissions.includes(permission as any);
  }, [user]);

  const hasRole = useCallback((role: UserRole): boolean => {
    if (!user) return false;
    return user.role === role;
  }, [user]);

  const redirectToDashboard = useCallback((userRole?: UserRole) => {
    const role = userRole || user?.role;
    if (!role) return;
    
    switch (role) {
      case UserRole.ADMIN:
        router.push(`/${locale}${DASHBOARD_ROUTES.ADMIN.HOME}`);
        break;
      case UserRole.TEACHER:
        router.push(`/${locale}${DASHBOARD_ROUTES.TEACHER.HOME}`);
        break;
      case UserRole.STUDENT:
        router.push(`/${locale}${DASHBOARD_ROUTES.STUDENT.HOME}`);
        break;
      default:
        router.push(`/${locale}/login`);
    }
  }, [user, router, locale]);

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    verifyEmail,
    hasPermission,
    hasRole,
    redirectToDashboard,
  };
}; 