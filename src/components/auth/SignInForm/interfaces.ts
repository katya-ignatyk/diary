import { IUserAuthData } from '../../../redux/actions/user/interfaces';

export interface IUserAuthReduxProps {
  signIn : (userData : IUserAuthData) => Promise<boolean> ;
}
