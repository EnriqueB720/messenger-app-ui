import React, { FC, useCallback, useState } from 'react';
import { useApolloClient } from '@apollo/client';

import AuthContext from './auth.context';

import { AuthCredentials, User, SignUpUser } from '@model';
import { AuthService } from '@services';
import { AuthProviderProps } from '@types';
import { useLoginLazyQuery, useSignupMutation } from '@generated';
import { StorageService } from '@services';
import { useTranslation } from '../hooks';


const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const client = useApolloClient();

  const [user, setUser] = useState<User>();

  const [loginQuery] = useLoginLazyQuery({
    fetchPolicy: 'cache-and-network'
  });

  const [signupQuery] = useSignupMutation();
  const { setLanguage } = useTranslation();

  const login = useCallback(async ({ credentials }: AuthCredentials) => {
    try {
      const { email, password } = credentials;

      setIsLoading(true);

      let {data} = await loginQuery({
        variables:{
          data:{
            email,
            password
          }
        }
      });
     
      StorageService.setLanguage(data?.login.user.language!);
      setLanguage(data?.login.user.language!);
      
      StorageService.setJwtToken(data?.login!.access_token!);

      const user =  new User(data?.login!.user!);
      setUser(user);

      setIsAuthenticated(true);
    } catch (error: any) {
      setIsLoading(false);
    }
  }, [loginQuery, setIsLoading, setIsAuthenticated, setUser]);

  const register = useCallback(async ({data}: SignUpUser)  => {
    try {
      setIsLoading(true);

      let result = await signupQuery({
        variables:{
          data
        }
      });

      if(result.errors){
        console.log(result.errors);
      }

    } catch (error: any) {
      setIsLoading(false);
    }
  }, [setIsLoading]);

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
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;