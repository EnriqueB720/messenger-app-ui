import React, { FC, useState } from 'react';
import { useApolloClient } from '@apollo/client';

import AuthContext from './auth.context';

import { AuthCredentials } from '@model';
import { AuthService } from '@services';
import { AuthProviderProps } from '@types';


const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const client = useApolloClient();

  const [user, setUser] = useState();

  const login = async ({ credentials }: AuthCredentials) => {
    try {
      const { email, password } = credentials;

      setIsLoading(true);

      const user =  await AuthService.login(email, password);
      setUser(user as any);


      setIsAuthenticated(true);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);

      await client.clearStore();
      await AuthService.logout();

      setIsAuthenticated(false);
    } catch (error) {}

    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;