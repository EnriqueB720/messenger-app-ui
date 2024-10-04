import { createContext } from 'react';

import { AuthCredentials, User, SignUpUser } from '@model';

export interface IAuthContext {
  user?: User;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  register: (values: SignUpUser) => Promise<void>;
  logout: () => Promise<void>;
}

export default createContext<IAuthContext>({
  user: undefined,
  isLoading: false,
  isAuthenticated: false,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve()
});