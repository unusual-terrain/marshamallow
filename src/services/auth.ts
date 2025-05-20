import { createContext, useContext } from 'react';
import type { UserData } from '.';

export type AuthData = {
  uid: string;
  password: string;
  userData: UserData;
};

export type AuthContextType = {
  authData: AuthData | null;
  login: (data: AuthData) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
