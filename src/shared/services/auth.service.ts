import { useLoginQuery, useSignupMutation } from '@generated';

import { AuthError } from '../errors/index';
import { SignUpUser, User } from '@model';
import { StorageService } from '@services';

export class AuthService {


  public async login(email: string, password: string): Promise<User> {
    try {
    
      const result = await useLoginQuery({
        variables:{
          data:{
            email,
            password
          }
        }
      });

      StorageService.setJwtToken(result.data?.login!.access_token!);

      return result.data?.login!.user! as User;

    } catch (error:any) {
      console.error(error);

      throw new AuthError(error.name);
    }
  }

  public async logout(): Promise<void> {
    try {
      StorageService.removeJwtToken();
    } catch (error) {
      throw new AuthError();
    }
  }

  public async register({ data }: SignUpUser): Promise<void> {
    try {
      await useSignupMutation({
        variables:{
          data
        }
      })
    } catch (error) {
      throw new AuthError();
    }
  }

}

const instance = new AuthService();

export default instance;