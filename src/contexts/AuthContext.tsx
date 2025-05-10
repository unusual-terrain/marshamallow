import { useState, type ReactNode } from 'react';
import { AuthContext, type AuthData } from '../services';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  const login = (data: AuthData) => {
    setAuthData(data);
  };

  const logout = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
