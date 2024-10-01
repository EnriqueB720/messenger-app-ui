import { createContext } from 'react';

import { AuthCredentials, User } from '@model';

export interface IAuthContext {
  user?: User;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

export default createContext<IAuthContext>({
  user: undefined,
  isLoading: false,
  isAuthenticated: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
});