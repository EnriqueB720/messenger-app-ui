import React, { FC, useCallback, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';

import AuthContext, { IAuthContext } from './auth.context';

import { AuthCredentials, User } from '@model';
import { AuthService } from '@services';
import { AuthProviderProps } from '@types';
import { useLoginLazyQuery } from '@generated';
import { StorageService } from '@services';


const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const client = useApolloClient();

  const [user, setUser] = useState<User>();

  const [loginQuery] = useLoginLazyQuery({
    fetchPolicy: 'cache-and-network'
  });

  const login = useCallback(async ({ credentials }: AuthCredentials) => {
    try {
      const { email, password } = credentials;

      setIsLoading(true);

      let result = await loginQuery({
        variables:{
          data:{
            email,
            password
          }
        }
      });
     
      StorageService.setJwtToken(result.data?.login!.access_token!);

      const user =  new User(result.data?.login!.user!);
      setUser(user);


      setIsAuthenticated(true);
    } catch (error: any) {
      setIsLoading(false);
    }
  }, []);

  const logout = async () => {
    try {
      setIsLoading(true);

      await client.clearStore();
      await AuthService.logout();

      setIsAuthenticated(false);
    } catch (error) {}

    setIsLoading(false);
  };

  
  const value: IAuthContext = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;