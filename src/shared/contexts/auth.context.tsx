import { createContext } from 'react';

import { AuthCredentials, User, SignUpUser } from '@model';
import { Contact } from '@generated';

export interface IAuthContext {
  user?: User;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: AuthCredentials) => Promise<boolean>;
  register: (values: SignUpUser) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserToken: () => Promise<void>;
  addNewContact: (newContact: Contact) => void;
}

export default createContext<IAuthContext>({
  user: undefined,
  isLoading: false,
  isAuthenticated: false,
  login: () => Promise.resolve(false),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  refreshUserToken: () => Promise.resolve(),
  addNewContact: () => {}
});